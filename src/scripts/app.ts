import Content from "./content";
interface IApp {
  config: any;
  contentId: number;
  contentData: any;
}

class Page extends H5P.EventDispatcher {
  /*
   * @constructor for H5P.Page
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  constructor(config: any, contentId: number, params: any, contentData = {}) {
    super();
    this.contentId = contentId;
    this.mainWrapper = null;

    // Hello, World constructor
    const username: string =
      (H5PIntegration && H5PIntegration.user && H5PIntegration.user.name) ||
      "World";
    this.title = document.createElement("div");
    this.title.innerText = params.titleField.replace("%username", username);

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry
     * are used by H5P's question type contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */
    this.params.behaviour.enableSolutionsButton = false;
    this.params.behaviour.enableRetry = false;

    this.content = Content;

    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */
    this.attach = ($wrapper: any) => {
      this.mainWrapper = $wrapper;
      // Needed to enable scrolling in fullscreen
      // $wrapper.addClass("h5p-page");

      if (this.isEdge18orEarlier()) {
        $wrapper.addClass("edge-18");
      }

      $wrapper.append(`<div class="title-text">${this.title}</div>`);

      $wrapper.append(this.content.container);
      this.$wrapper = $wrapper;
    };

    /**
     * Checks if browser is IE Edge version 18 or earlier
     */
    this.isEdge18orEarlier = () => {
      const ua = window.navigator.userAgent;
      const edgeIndex = ua.indexOf("Edge/");
      if (edgeIndex < 0) {
        return false;
      }
      const edgeVersion = ua.substring(
        edgeIndex + 5,
        ua.indexOf(".", edgeIndex),
      );
      return parseInt(edgeVersion, 10) <= 18;
    };
  }
}

export default Page;
