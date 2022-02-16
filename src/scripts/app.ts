class Page extends H5P.EventDispatcher {
  /**
   * @constructor for H5P.Page
   *
   * @param {object} config // Parameters passed by the editor.
   * @param {object} parent
   * @param {object} params
   * @param {object} [extras] Saved state, metadata, etc.
   * @param {number|*} contentId
   * @param {object} contentData
   * @param {object} mainWrapper
   */
  constructor(
    config: any,
    contentId: number,
    mainWrapper: any,
    myElement: HTMLElement,
    params: any,
    parent: any,
    contentData: any = {},
  ) {
    super();
    this.contentId = contentId;
    this.params = params;
    this.mainWrapper = null;

    // Hello, World constructor
    const username: string =
      (H5PIntegration && H5PIntegration.user && H5PIntegration.user.name) ||
      "World";
    this.myElement = document.createElement("div");
    this.myElement.innerText = params.textField.replace("%username", username);

    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */
    this.attach = ($wrapper: any) => {
      this.mainWrapper = $wrapper;
      // Needed to enable scrolling in fullscreen
      $wrapper.addClass("h5p-hello-world");

      if (this.isEdge18orEarlier()) {
        $wrapper.addClass("edge-18");
        $wrapper.append(this.myElement);
      }
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
