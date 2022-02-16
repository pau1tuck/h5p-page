interface Instance {
  config: any;
  contentId: string;
  contentData: any;
}

export default class PageContent extends H5P.EventDispatcher {
  private parent: any;
  private behaviour: any;
  private params: any;
  private columnNodes: any;
  private shouldAutoplay: any;
  private l10n: any;
  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   * @param {object} parent
   * @param {object} params
   */
  constructor(
    config: any,
    contentId: string,
    contentData: any = {},
    parent: any,
    params: any
  ) {
    super();
    this.parent = parent;
    this.behaviour = config.behaviour;

    this.params = params;

    this.columnNodes = [];
    this.shouldAutoplay = [];
    this.l10n = config.l10n;
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
   * @param {object} config // Parameters
   * @param {number} contentId
   * @param {object} contentData
   */
  private createColumns(config, contentId, contentData): void {}
}
