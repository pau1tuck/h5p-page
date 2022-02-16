/* interface IInstance {
  config: any;
  contentId: string;
  contentData: any;
} */

class Page extends H5P.EventDispatcher {
  private parent: any;
  private behaviour: any;
  private params: any;
  private columnNodes: any;
  private shouldAutoplay: any;
  private l10n: any;
  private myElement: HTMLElement;
  private createContent: any;
  /**
   * @constructor for H5P.Page
   *
   * @param {object} config // Parameters passed by the editor.
   * @param {string} contentId
   * @param {object} contentData
   * @param {object} parent
   * @param {object} params
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(
    config: any,
    contentId: string,
    parent: any,
    params: any,
    MyElement: HTMLElement,
    createContent: any,
    contentData: any = {}
  ) {
    super();
    this.parent = parent;
    this.behaviour = config.behaviour;

    this.params = params;

    this.columnNodes = [];
    this.shouldAutoplay = [];
    this.l10n = config.l10n;

    // Hello, World constructor
    const username: string =
      (H5PIntegration && H5PIntegration.user && H5PIntegration.user.name) ||
      "World";
    this.myElement = document.createElement("div");
    this.myElement.innerText = params.textField.replace("%username", username);

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.createContent = (): void => {
      const content = document.createElement("div");
      content.classList.add("h5p-hello-world");
      content.appendChild(this.myElement);
    };
  }

  /**
   * Create page content
   *
   * @return {HTMLElement} Page content
   */
  public createPageContent = (): HTMLElement => {
    const content = document.createElement("div");
    content.classList.add("h5p-page-content");
    this.columnNodes.forEach((element: HTMLElement) => {
      content.appendChild(element);
    });

    return content;
  };

  /**
   * Create Column instances
   *
   * @param {object} config // Parameters passed by the editor.
   * @param {number} contentId
   * @param {object} contentData
   */
  // private createColumns({ config, contentId, contentData }: IInstance): void {}
}

export default Page;
