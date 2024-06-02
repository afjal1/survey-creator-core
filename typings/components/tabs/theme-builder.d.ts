import { SurveySimulatorModel } from "../simulator";
import { Base, PageModel, SurveyModel, Action, IAction, ActionContainer, ITheme, EventBase, IElement } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { IAddPropertyGridEditorParams } from "./theme-plugin";
export declare function getThemeFullName(theme: ITheme): string;
export declare function getObjectDiffs(obj1: any, obj2?: any): any;
export declare function getThemeChanges(fullTheme: ITheme, baseTheme?: ITheme): ITheme;
export declare function findSuitableTheme(themeName: string, themePalette: string, themeMode: string, probeThemeFullName: string): ITheme;
export declare class ThemeEditorModel extends Base {
    private surveyProvider;
    private startThemeClasses;
    static DefaultTheme: ITheme;
    private json;
    pages: ActionContainer;
    prevPageAction: Action;
    testAgainAction: Action;
    nextPageAction: Action;
    undoRedoManager: UndoRedoManager;
    private advancedModeSwitcher;
    private themeEditorSurveyValue;
    private themeCssVariablesChanges;
    private colorCalculator;
    private blockChanges;
    private _availableThemes;
    private prevQuestionValues;
    private _setPGEditorPropertyValue;
    onSurveyCreatedCallback: (survey: SurveyModel) => any;
    get themeCssCustomizations(): {
        [index: string]: string;
    };
    simulator: SurveySimulatorModel;
    showInvisibleElements: any;
    showPagesInTestSurveyTab: any;
    isRunning: boolean;
    pageListItems: Array<IAction>;
    activePage: PageModel;
    backgroundImage: any;
    backgroundImageFit: any;
    backgroundImageAttachment: any;
    backgroundOpacity: any;
    themeName: any;
    themePalette: any;
    themeMode: any;
    groupAppearanceAdvancedMode: boolean;
    getFullThemeName(_themeName?: string): any;
    get survey(): SurveyModel;
    get pageActions(): Array<Action>;
    get isPageToolbarVisible(): boolean;
    get themeEditorSurvey(): SurveyModel;
    get currentTheme(): ITheme;
    get currentThemeCssVariables(): {
        [index: string]: string;
    };
    onThemeSelected: EventBase<ThemeEditorModel, {
        theme: ITheme;
    }>;
    onThemePropertyChanged: EventBase<ThemeEditorModel, {
        name: string;
        value: any;
    }>;
    onAllowModifyTheme: EventBase<ThemeEditorModel, {
        theme: ITheme;
        allow: boolean;
    }>;
    constructor(surveyProvider: SurveyCreatorModel, startThemeClasses?: any);
    get isMobileView(): boolean;
    get showResults(): boolean;
    loadTheme(theme: ITheme): void;
    private _defaultSessionTheme;
    get defaultSessionTheme(): ITheme;
    set defaultSessionTheme(theme: ITheme);
    resetTheme(): void;
    setTheme(theme: ITheme): void;
    selectTheme(themeName: string, themePalette?: string, themeMode?: string): void;
    updateSimulatorSurvey(json: any, theme: any): void;
    setJSON(json: any, currTheme: any): void;
    getPropertyGridCategory(categoryName: string): IElement | undefined;
    removePropertyGridEditor(name: string): void;
    addPropertyGridEditor(params: IAddPropertyGridEditorParams): void;
    private creatorPropertyChanged;
    private blockThemeChangedNotifications;
    initialize(json: any, options: any): void;
    private updatePageItem;
    private getCurrentPageItem;
    private getSelectPageTitle;
    private getPageTitle;
    private updatePageList;
    show(): void;
    testAgain(): void;
    buildActions(): void;
    private updatePrevNextPageActionState;
    get availableThemes(): string[];
    set availableThemes(availebleThemes: string[]);
    private setActivePageItem;
    private getPageItemByPage;
    private getPredefinedColorsItemValues;
    private initializeColorCalculator;
    private generalPropertiesChanged;
    private headerViewContainerPropertiesChanged;
    private shadowInnerPropertiesChanged;
    private cssVariablePropertiesChanged;
    private updateDependentQuestionValues;
    private setThemeCssVariablesChanges;
    protected createThemeEditorSurvey(): SurveyModel;
    private createAppearanceAdvancedModeAction;
    findSuitableTheme(themeName: string): ITheme;
    private patchFileEditors;
    private getCoverJson;
    private setHeaderBackgroundColorCssVariable;
    private loadThemeIntoPropertyGrid;
    private getBackgroundColorSwitchByValue;
    private updateVisibilityOfPropertyGridGroups;
    private setCoverPropertiesFromSurvey;
    private setCoverColorsFromThemeVariables;
    private updateHeaderViewContainerEditors;
    private updatePropertyGridEditorsAvailability;
    private updatePropertyGridEditors;
    private trimCssVariables;
    private updateSimulatorTheme;
    private _saveThemeFuncValue;
    /**
     * A function that is called [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
     *
     * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
     */
    get saveThemeFunc(): any;
    set saveThemeFunc(value: any);
    private autoSaveTimerId;
    protected processAutoSave(): void;
    protected themeModified(options: {
        theme: ITheme;
    } | {
        name: string;
        value: any;
    }): void;
    private getDefaultTitleSetting;
    private getDefaultDescriptionSetting;
    private getThemeEditorSurveyJSON;
    getHorizontalAlignment(questionName: string, title: string, defaultValue: string): {
        type: string;
        name: string;
        title: string;
        choices: {
            value: string;
            text: string;
        }[];
        defaultValue: string;
    };
    getVerticalAlignment(questionName: string, defaultValue: string): {
        type: string;
        name: string;
        titleLocation: string;
        choices: {
            value: string;
            text: string;
        }[];
        defaultValue: string;
    };
    dispose(): void;
}
