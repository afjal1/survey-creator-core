import { Action, ITheme, EventBase, IElement, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { ThemeEditorModel } from "./theme-builder";
import { saveToFileHandler } from "../../utils/utils";
export interface IPropertyGridSurveyCreatedEvent {
    survey: SurveyModel;
    model: ThemeEditorModel;
}
export interface IAddPropertyGridEditorParams {
    element: IElement;
    category?: string;
    insertAfter?: string;
    insertBefore?: string;
}
/**
 * An object that enables you to modify, add, and remove UI themes and handle theme-related events. To access this object, use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) property on a Survey Creator instance:
 *
 * ```js
 * const creatorOptions = { ... };
 * const creator = new SurveyCreator.SurveyCreator(creatorOptions);
 * creator.themeEditor.settingName = "value";
 *
 * // In modular applications:
 * import { SurveyCreatorModel } from "survey-creator-core";
 *
 * const creatorOptions = { ... };
 * const creator = new SurveyCreatorModel(creatorOptions);
 * creator.themeEditor.settingName = "value";
 * ```
 */
export declare class ThemeTabPlugin implements ICreatorPlugin {
    private creator;
    static DefaultTheme: ITheme;
    private previewAction;
    private invisibleToggleAction;
    private testAgainAction;
    private designerAction;
    private prevPageAction;
    private nextPageAction;
    private themeSettingsAction;
    private saveThemeAction;
    private resetTheme;
    private importAction;
    private exportAction;
    private undoAction;
    private redoAction;
    private inputFileElement;
    private simulatorCssClasses;
    private sidebarTab;
    private _availableThemes;
    model: ThemeEditorModel;
    private createVisibleUpdater;
    constructor(creator: SurveyCreatorModel);
    activate(): void;
    update(): void;
    deactivate(): boolean;
    saveToFileHandler: typeof saveToFileHandler;
    exportToFile(fileName: string): void;
    importFromFile(file: File, callback?: (theme: ITheme) => void): void;
    createActions(): Array<Action>;
    undo(): void;
    redo(): void;
    private updateUndeRedoActions;
    addFooterActions(): void;
    /**
     * A list of UI themes from which users can select. You can sort this list if you want to reorder themes in Theme Editor.
     * @see addTheme
     * @see removeTheme
     */
    get availableThemes(): string[];
    set availableThemes(availableThemes: string[]);
    /**
     * Adds a new UI theme to Theme Editor.
     * @param theme A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to add.
     * @param setAsDefault For internal use.
     * @returns An identifier of the added theme, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`).
     * @see removeTheme
     * @see getCurrentTheme
     */
    addTheme(theme: ITheme, setAsDefault?: boolean): string;
    /**
     * Removes a UI theme from Theme Editor.
     * @param themeAccessor A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to delete or a theme identifier, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`).
     * @param includeModifications Pass `true` to delete not only the specified UI theme, but also all other themes with the same `themeName` value (dark/light and panelless modifications).
     * @see addTheme
     * @see getCurrentTheme
     */
    removeTheme(themeAccessor: string | ITheme, includeModifications?: boolean): void;
    /**
     * Returns a JSON object that describes the currently applied UI theme.
     * @param changesOnly Pass `true` to get a JSON object that contains only changed theme settings instead of a full theme JSON schema.
     * @returns A currently applied [theme JSON schema](https://surveyjs.io/form-library/documentation/api-reference/itheme).
     * @see availableThemes
     * @see addTheme
     * @see removeTheme
     */
    getCurrentTheme(changesOnly?: boolean): ITheme;
    getThemeChanges(): ITheme;
    /**
     * Indicates whether the selected theme has been modified.
     * @see [`creator.saveTheme()`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveTheme)
     * @see [`creator.saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc)
     */
    get isModified(): boolean;
    /**
     * An event that is raised when users select a UI theme from a drop-down list, choose a dark or light color palette, and switch between regular and panelless theme modifications.
     *
     * Parameters:
     *
     * - `sender`: `ThemeTabPlugin`\
     * A `ThemeTabPlugin` instance that raised the event.
     * - `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
     * A selected theme.
     * @see availableThemes
     * @see addTheme
     * @see removeTheme
     */
    onThemeSelected: EventBase<ThemeTabPlugin, {
        theme: ITheme;
    }>;
    /**
     * An event that is raised when the value of a property or CSS variable in a theme JSON schema has changed.
     *
     * Parameters:
     *
     * - `sender`: `ThemeTabPlugin`\
     * A `ThemeTabPlugin` instance that raised the event.
     * - `options.name`: `string`\
     * The name of the changed property or CSS variable.
     * - `options.value`: `any`\
     * A new value of the property or CSS variable.
     */
    onThemePropertyChanged: EventBase<ThemeTabPlugin, {
        name: string;
        value: any;
    }>;
    /**
     * An event that you can use to switch the current theme to read-only mode.
     *
     * Parameters:
     *
     * - `sender`: `ThemeTabPlugin`\
     * A `ThemeTabPlugin` instance that raised the event.
     * - `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
     * The current theme.
     * - `options.allow`: `boolean`\
     * A Boolean property that you can set to `false` if you want to disallow theme modifications.
     */
    onAllowModifyTheme: EventBase<ThemeTabPlugin, {
        theme: ITheme;
        allow: boolean;
    }>;
    /**
     * An event that is raised when a [survey that represents the Property Grid](https://surveyjs.io/survey-creator/documentation/creator-v2-whats-new#survey-creator-ui-elements-are-surveys) is instantiated. Handle this event to customize the Property Grid.
     *
     * Parameters:
     *
     * - `sender`: `ThemeTabPlugin`\
     * A `ThemeTabPlugin` instance that raised the event.
     * - `options.survey`: `SurveyModel`\
     * A survey that represents the Property Grid.
     * - `options.model`: `ThemeEditorModel`\
     * A Theme Editor model.
     */
    onPropertyGridSurveyCreated: EventBase<ThemeTabPlugin, IPropertyGridSurveyCreatedEvent>;
}
