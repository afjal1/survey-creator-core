/*!
 * SurveyJS Creator v1.10.6
 * (c) 2015-2024 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-creator-core"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyCreatorLocales", ["survey-creator-core"], factory);
	else if(typeof exports === 'object')
		exports["SurveyCreatorLocales"] = factory(require("survey-creator-core"));
	else
		root["SurveyCreatorLocales"] = factory(root["SurveyCreatorCore"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_survey_creator_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/tajik.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/tajik.ts":
/*!***********************************!*\
  !*** ./src/localization/tajik.ts ***!
  \***********************************/
/*! exports provided: tgStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tgStrings", function() { return tgStrings; });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);

var tgStrings = {
    // survey templates
    survey: {
        edit: "Тағйир додан",
        externalHelpLink: "Ёд гирифтани ташкил кардани саволномаҳо",
        externalHelpLinkUrl: "Https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
        dropQuestion: "Илтимос, элементи даркориро аз бастаи чап кашида биёред.",
        // addLogicItem: "Create a rule to customize the flow of the survey.",
        copy: "Нусхабардорӣ кардан",
        // duplicate: "Duplicate",
        addToToolbox: "Илова кардан ба асбобҳо",
        deletePanel: "Нест кардани баста",
        deleteQuestion: "Нест кардани савол",
        convertTo: "Тағйир додани шакл ба",
        drag: "Кашидани элемент",
    },
    // Creator tabs
    tabs: {
        preview: "Санҷиши саволнома",
        // theme: "Themes",
        translation: "Тарҷума",
        designer: "Дида баромадани конструктор",
        editor: "Тағйиркунаки JSON",
        logic: "Мантиқи саволнома"
    },
    // Question types
    qt: {
        default: "Бо нобаёнӣ",
        checkbox: "Интихоби бисёр",
        comment: "Шарҳ",
        imagepicker: "Интихоби сурат",
        // ranking: "Ranking",
        // image: "Image",
        dropdown: "Рӯйхати таркишӣ",
        // tagbox: "Multi-Select Dropdown",
        file: "Боркунии файлҳо",
        // html: "HTML",
        matrix: "Матриса (интихоби танҳо)",
        matrixdropdown: "Матриса (интихоби бисёр)",
        matrixdynamic: "Матриса (сатрҳои динамикӣ)",
        multipletext: "Матнҳои бисёр",
        panel: "Баста (барои гурӯҳи саволҳо)",
        paneldynamic: "Баста (бастаҳои динамикӣ)",
        radiogroup: "Интихоби танҳо",
        rating: "Рейтинг (миқёс)",
        text: "Воридкунии матнӣ",
        boolean: "Қиммати булӣ",
        expression: "Ифода (танҳо барои хондан)",
        // signaturepad: "Signature",
        // buttongroup: "Button Group"
    },
    toolboxCategories: {
        general: "Умумӣ",
        // choice: "Choice Questions",
        // text: "Text Input Questions",
        // containers: "Containers",
        // matrix: "Matrix Questions",
        // misc: "Misc"
    },
    // Strings in SurveyJS Creator
    ed: {
        defaultLocale: "Бо нобаёнӣ ({0})",
        survey: "Саволнома",
        settings: "Танзимоти саволнома",
        // settingsTooltip: "Open settings",
        // surveySettings: "Survey Settings",
        // surveySettingsTooltip: "Survey settings",
        // themeSettings: "Theme Settings",
        // themeSettingsTooltip: "Theme settings",
        // showPanel: "Show Panel",
        // hidePanel: "Hide Panel",
        // prevSelected: "Select previous",
        // nextSelected: "Select next",
        // prevFocus: "Focus previous",
        // nextFocus: "Focus next",
        // surveyTypeName: "Survey",
        // pageTypeName: "Page",
        // panelTypeName: "Panel",
        // questionTypeName: "Question",
        // columnTypeName: "Column",
        addNewPage: "Сохтани саҳифаи нав",
        moveRight: "Ба рост тоб додан",
        moveLeft: "Ба чап тоб додан",
        deletePage: "Нест кардани саҳифа",
        editPage: "Тағйир додани саҳифа",
        edit: "Тағйир додан",
        newPageName: "саҳифа",
        newQuestionName: "савол",
        newPanelName: "баста",
        newTextItemName: "матн",
        // defaultV2Theme: "Default",
        // modernTheme: "Modern",
        // defaultTheme: "Default (legacy)",
        testSurveyAgain: "Боз як бор санҷиш гузаронидан",
        testSurveyWidth: "Дарозии саволнома:",
        // navigateToMsg: "You had to navigate to",
        saveSurvey: "Сабти саволнома",
        // saveSurveyTooltip: "Save Survey",
        // saveTheme: "Save Theme",
        // saveThemeTooltip: "Save Theme",
        // jsonHideErrors: "Hide errors",
        // jsonShowErrors: "Show errors",
        undo: "Бекор кардан",
        redo: "Такрор",
        // undoTooltip: "Undo last change",
        // redoTooltip: "Redo the change",
        // showMoreChoices: "Show more",
        // showLessChoices: "Show less",
        // copy: "Copy",
        // cut: "Cut",
        // paste: "Paste",
        // copyTooltip: "Copy selection to clipboard",
        // cutTooltip: "Cut selection to clipboard",
        // pasteTooltip: "Paste from clipboard",
        options: "Танзимотҳо",
        generateValidJSON: "Сохтани JSON-и дуруст",
        generateReadableJSON: "Сохтани JSON-и мехондагӣ",
        toolbox: "Бастаи асбобҳо",
        // "property-grid": "Properties",
        // propertyGridFilteredTextPlaceholder: "Type to search...",
        // propertyGridNoResultsFound: "No results found",
        correctJSON: "Илтимос, JSON-ро дуруст кунед.",
        surveyResults: "Натиҷаи ташхис:",
        surveyResultsTable: "Ҳамчун ҷадвал",
        surveyResultsJson: "Ҳамчун JSON",
        resultsTitle: "Сарлавҳаи савол",
        resultsName: "Мақсади савол",
        resultsValue: "Қиммати ҷавоб",
        resultsDisplayValue: "Қиммати нишондода",
        modified: "Тағйирдодашуда",
        saving: "Сабт",
        saved: "Сабтшуда",
        // propertyEditorError: "Error",
        saveError: "Хатогӣ! Қиммати тағйиркунак сабт нашудааст.",
        // translationPropertyGridTitle: "Language Settings",
        // themePropertyGridTitle: "Theme Settings",
        // translationLanguages: "Languages",
        // translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?",
        translationAddLanguage: "Интихоби забон барои тарҷума",
        translationShowAllStrings: "Нишон додани ҳамаи сатрҳо",
        // translationShowUsedStringsOnly: "Used Strings Only",
        translationShowAllPages: "Нишон додани ҳамаи саҳифаҳо",
        translationNoStrings: "Сатрҳо барои тарҷума вуҷуд надоранд. Илтимос, филтрро тағйир диҳед.",
        translationExportToSCVButton: "Экспорт ба CSV",
        translationImportFromSCVButton: "Импорт аз CSV",
        // translateUsigAI: "Auto-translate All",
        // translateUsigAIFrom: "Translate from: ",
        // translationDialogTitle: "Untranslated strings",
        translationMergeLocaleWithDefault: "Якҷоя кардани {0} бо локали нобаёнӣ",
        // translationPlaceHolder: "Translation...",
        // translationSource: "Source: ",
        // translationTarget: "Target: ",
        // themeExportButton: "Export",
        // themeImportButton: "Import",
        // surveyJsonExportButton: "Export",
        // surveyJsonImportButton: "Import",
        // surveyJsonCopyButton: "Copy to clipboard",
        // themeResetButton: "Reset theme settings to default",
        // themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost.",
        // themeResetConfirmationOk: "Yes, reset the theme",
        bold: "Ғавс",
        italic: "Қаҷ",
        underline: "Зерхат",
        addNewQuestion: "Иловаи савол",
        // selectPage: "Select page...",
        // carryForwardChoicesCopied: "Choices are copied from",
        // choicesLoadedFromWebText: "Choices are loaded from a web service.",
        // choicesLoadedFromWebLinkText: "Go to settings",
        // choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options",
        // htmlPlaceHolder: "HTML content will be here.",
        // panelPlaceHolder: "Drop a question from the toolbox here.",
        // surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
        // pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below.",
        // imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload",
        // surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form.",
        // pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page.",
        // panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel.",
        // imagePlaceHolderMobile: "Click the button below and choose an image to upload",
        // imageChooseImage: "Choose Image",
        // addNewTypeQuestion: "Add {0}", //{0} is localizable question type
        // chooseLogoPlaceholder: "[LOGO]",
        // choices_Item: "Item ",
        // selectFile: "Select a file",
        // removeFile: "Remove the file",
        lg: {
            // addNewItem: "Add New Rule",
            // empty_tab: "Create a rule to customize the flow of the survey.",
            page_visibilityName: "Намоиши саҳифа",
            // page_enableName: "Enable/disable page",
            // page_requireName: "Make page required",
            panel_visibilityName: "Намоиши баста",
            panel_enableName: "Баста гирон/куштагӣ",
            // panel_requireName: "Make panel required",
            question_visibilityName: "Намоиши савол",
            question_enableName: "Савол гирон/куштагӣ",
            question_requireName: "Савол ихтиёрӣ аст",
            // question_resetValueName: "Reset question value",
            // question_setValueName: "Set question value",
            // column_visibilityName: "Show/hide column",
            // column_enableName: "Enable/disable column",
            // column_requireName: "Make column required",
            // column_resetValueName: "Reset column value",
            // column_setValueName: "Set column value",
            trigger_completeName: "Назарсанҷӣ тамом шуд",
            trigger_setvalueName: "Сабти қиммати савол",
            trigger_copyvalueName: "Нусхабардорӣ кардани қиммати савол",
            trigger_skipName: "Гузаштан ба савол",
            trigger_runExpressionName: "Иҷро кардани ифодаи истифодабаранда",
            completedHtmlOnConditionName: "Матни истифодабаранда 'Саҳифаи ташаккурӣ'",
            page_visibilityDescription: "Саҳифаро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            panel_visibilityDescription: "Бастаро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            panel_enableDescription: "Бастаро ва ҳамаи элементҳои дохилии онро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_visibilityDescription: "Саволро намоён кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_enableDescription: "Саволро гирон кардан, агар ифодаи мантиқӣ 'true' баргардонад. Вагарна онро нонамоён кардан.",
            question_requireDescription: "Савол ҳатмӣ мешавад, вақте ки ифодаи мантиқӣ 'true' баргардонад.",
            trigger_completeDescription: "Вақте, ки ифодаи мантиқӣ 'true' баргардонад, он вақт ӯ ҳамчун тамом шуда ҳисобида мешавад ва истифодабар саҳифаи 'Саҳифаи ташаккурӣ'-ро мебинад.",
            trigger_setvalueDescription: "Вақте, ки қиммати саволҳо, ки дар ифодаи мантиқӣ истифода мешавад, тағйир мешаванд ва ифодаи мантиқӣ 'true' бармегардонад, он гоҳ ба саволи интихобшуда қиммат сабт мешавад.",
            trigger_copyvalueDescription: "Вақте, ки қимматҳои саволҳо, ки дар ифодаи мантиқӣ истифода мешаванд, тағйир меёбанд ва ифода қиммати 'true' бармегардонад, он гоҳ як қиммати саволи интихобшуда ба дигар савол нусхабардорӣ карда мешавад.",
            trigger_skipDescription: "Вақте, ки ифодаи мантиқӣ 'true' бармегардонад, он гоҳ саволнома ба саволи интихобшуда равона мешавад.",
            trigger_runExpressionDescription: "Вақте, ки ифодаи мантиқӣ 'true' бармегардонад, он гоҳ ифодаи истифодабар иҷро мешавад. Шумо, бо хоҳиш, метавонед натиҷаи ин ифодаро ба саволи интихобшуда бахшед.",
            completedHtmlOnConditionDescription: "Агар ифодаи мантиқӣ 'true' баргардонад, он гоҳ матн бо нобаёнӣ барои 'саҳифаи ташаккурӣ' тағйир мешавад ба ишорашуда.",
            itemExpressionText: "Вақте, ки ифода: '{0}' бармегардонад 'true':",
            // itemEmptyExpressionText: "New rule",
            page_visibilityText: "Саҳифаи {0}-ро намоён кардан ",
            panel_visibilityText: "Бастаи {0}-ро намоён кардан",
            panel_enableText: "Бастаи {0}-ро гирон кардан",
            question_visibilityText: "Саволи {0}-ро намоён кардан",
            question_enableText: "Саволи {0}-ро намоён кардан",
            question_requireText: "Саволи {0}-ро ҳатмӣ кардан",
            // question_resetValueText: "reset value for question: {0}", //{0} question name.
            // question_setValueText: "assign value: {1} to question: {0}",
            // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
            // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
            // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
            // column_resetValueText: "reset cell value for column: {0}", //{0} column name
            // column_setValueText: "assign cell value: {1} to column: {0}", //{0} column name and {1} setValueExpression
            // setValueExpressionPlaceholder: "An expression whose result will be assigned to the target question.",
            trigger_completeText: "Саволнома ҳамчун анҷомшуда тағйир меёбад",
            trigger_setvalueText: "Ба саволи {0} қиммати {1}-ро сабт кардан",
            // trigger_setvalueEmptyText: "clear question value: {0}", //{0} question name
            trigger_copyvalueText: "Нусхабардорӣ кардан ба саволи {0} қиммат аз саволи {1}",
            trigger_skipText: "Саволнома мегузарад ба саволи {0}",
            trigger_runExpressionText1: "Иҷро кардани ифодаи: '{0}'",
            trigger_runExpressionText2: "ва натиҷаи онро ба саволи {0} гузоштан",
            completedHtmlOnConditionText: "Нишон додани матни истифодабар дар 'Саҳифаи ташаккурӣ'",
            // showAllQuestions: "All Questions",
            // showAllActionTypes: "All Action Types",
            // conditions: "Condition(s)",
            // actions: "Action(s)",
            expressionEditorTitle: "Танзимоти мантиқи ифода",
            // actionsEditorTitle: "Define action(s)",
            // deleteAction: "Delete Action",
            // addNewAction: "Add Action",
            // selectedActionCaption: "Select action...",
            expressionInvalid: "Ифодаи мантиқӣ холӣ ё беэътибор мебошад. Илтимос, ислоҳ кунед.",
            // noActionError: "Please add at least one action.",
            // actionInvalid: "Please fix issues in your action(s).",
            // uncompletedRule_title: "Logical rules are incomplete",
            // uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?",
            // uncompletedRule_apply: "Yes",
            // uncompletedRule_cancel: "No, I want to complete the rules"
        }
    },
    // Property Editors
    pe: {
        panel: {
        // name: "Panel name",
        // title: "Panel title",
        // description: "Panel description",
        // visibleIf: "Make the panel visible if",
        // requiredIf: "Make the panel required if",
        // questionsOrder: "Question order within the panel",
        // page: "Move the panel to page",
        // startWithNewLine: "Display the panel on a new line",
        // state: "Panel collapse state",
        // width: "Inline panel width",
        // minWidth: "Minimum panel width",
        // maxWidth: "Maximum panel width",
        // showNumber: "Number panels"
        },
        paneldynamic: {
        // name: "Panel name",
        // title: "Panel title",
        // description: "Panel description",
        // visibleIf: "Make the panel visible if",
        // requiredIf: "Make the panel required if",
        // page: "Move the panel to page",
        // startWithNewLine: "Display the panel on a new line",
        // state: "Panel collapse state",
        // width: "Inline panel width",
        // minWidth: "Minimum panel width",
        // maxWidth: "Maximum panel width",
        // confirmDelete: "Confirm panel deletion",
        // templateDescription: "Panel description pattern",
        // templateTitle: "Panel title pattern",
        // noEntriesText: "Empty panel text",
        // templateTabTitle: "Tab title pattern",
        // templateVisibleIf: "Make an individual panel visible if",
        // hideNumber: "Hide the panel number",
        // titleLocation: "Panel title alignment",
        // descriptionLocation: "Panel description alignment",
        // templateTitleLocation: "Question title alignment",
        // templateErrorLocation: "Error message alignment",
        // newPanelPosition: "New panel location",
        // keyName: "Prevent duplicate responses in the following question"
        },
        question: {
        // name: "Question name",
        // title: "Question title",
        // description: "Question description",
        // visibleIf: "Make the question visible if",
        // requiredIf: "Make the question required if",
        // page: "Move the question to page",
        // state: "Question box collapse state",
        // hideNumber: "Hide the question number",
        // titleLocation: "Question title alignment",
        // descriptionLocation: "Question description alignment",
        // errorLocation: "Error message alignment",
        // indent: "Increase the inner indent",
        // width: "Inline question width",
        // minWidth: "Minimum question width",
        // maxWidth: "Maximum question width",
        // textUpdateMode: "Update input field value"
        },
        signaturepad: {
        // signatureWidth: "Signature area width",
        // signatureHeight: "Signature area height",
        // signatureAutoScaleEnabled: "Auto-scale the signature area",
        // showPlaceholder: "Show a placeholder within signature area",
        // placeholder: "Placeholder text",
        // placeholderReadOnly: "Placeholder text in read-only or preview mode",
        // allowClear: "Show the Clear button within signature area",
        // penMinWidth: "Minimum stroke width",
        // penMaxWidth: "Maximum stroke width",
        // penColor: "Stroke color"
        },
        comment: {
        // rows: "Input field height (in lines)"
        },
        showQuestionNumbers: "Нишон додани номери савол",
        questionStartIndex: "Индекси саршавии савол (1, 2 ё 'A', 'а')",
        expression: {
        // name: "Expression name",
        // title: "Expression title",
        // description: "Expression description",
        // expression: "Expression"
        },
        trigger: {
        // expression: "Expression"
        },
        calculatedvalue: {
        // expression: "Expression"
        },
        // survey templates
        survey: {
        // title: "Survey title",
        // description: "Survey description"
        },
        page: {
        // name: "Page name",
        // title: "Page title",
        // description: "Page description",
        // visibleIf: "Make the page visible if",
        // requiredIf: "Make the page required if",
        // maxTimeToFinish: "Time limit to complete the page",
        // questionsOrder: "Question order on the page"
        },
        matrixdropdowncolumn: {
        // name: "Column name",
        // title: "Column title",
        // isUnique: "Prevent duplicate responses",
        // width: "Column width",
        // minWidth: "Minimum column width",
        // rows: "Input field height (in lines)",
        // visibleIf: "Make the column visible if",
        // requiredIf: "Make the column required if",
        // showInMultipleColumns: "Each option in a separate column"
        },
        multipletextitem: {
        // name: "Name",
        // title: "Title"
        },
        masksettings: {
        // saveMaskedValue: "Save masked value in survey results"
        },
        patternmask: {
        // pattern: "Value pattern"
        },
        datetimemask: {
        // min: "Minimum value",
        // max: "Maximum value"
        },
        numericmask: {
        // allowNegativeValues: "Allow negative values",
        // thousandsSeparator: "Thousands separator",
        // decimalSeparator: "Decimal separator",
        // precision: "Value precision",
        // min: "Minimum value",
        // max: "Maximum value"
        },
        currencymask: {
        // prefix: "Currency prefix",
        // suffix: "Currency suffix"
        },
        // imageHeight: "Display area height",
        // imageWidth: "Display area width",
        valueName: "Номи нуқта",
        // rateDescriptionLocation: "Label alignment",
        // size: "Input field width (in characters)",
        // cellErrorLocation: "Cell error message alignment",
        apply: "Сабт",
        ok: "OK",
        save: "Сабт кардан",
        // clear: "Clear",
        // saveTooltip: "Save",
        cancel: "Бекор кардан",
        // set: "Set",
        reset: "Партофтан",
        // change: "Change",
        // refresh: "Refresh",
        close: "Махкам кардан",
        delete: "Нест кардан",
        add: "Илова кардан",
        // addNew: "Add New",
        addItem: "Пахш кунед, барои илова кардани элемент...",
        // removeItem: "Click to remove the item...",
        // dragItem: "Drag the item",
        addOther: "Дигар",
        addSelectAll: "Интихоб кардани ҳамаи нуқтаҳо",
        addNone: "Ҳичӣ",
        removeAll: "Ҳамаро нест кардан",
        edit: "Тағйир додан",
        back: "Бозгашт бе сабт",
        // backTooltip: "Return without saving",
        saveAndBack: "Сабт кардан ва бозгаштан",
        // saveAndBackTooltip: "Save and return",
        // doneEditing: "Done",
        editChoices: "Тағйир додани интихоб",
        // showChoices: "Show Choices",
        move: "Ҷойивазкунӣ",
        empty: "<холӣ>",
        // emptyValue: "Value is empty",
        fastEntry: "Даромади тез",
        // fastEntryNonUniqueError: "Value '{0}' is not unique",
        // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
        // fastEntryChoicesMinCountError: "Please enter at least {0} items",
        // fastEntryPlaceholder: "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules.",
        formEntry: "Формаи даромад",
        testService: "Тести хизматрасонӣ",
        itemSelectorEmpty: "Илтимос, элементро интихоб кунед",
        // conditionActionEmpty: "Please select the action",
        conditionSelectQuestion: "Саволро интихоб кунед ...",
        conditionSelectPage: "Саҳифаро интихоб кунед ...",
        conditionSelectPanel: "Бастаро интихоб кунед ...",
        conditionValueQuestionTitle: "Илтимос, қимматро ворид/интихоб кунед",
        aceEditorHelp: "Тугмаҳои Ctrl+Пробел пахш кунед, барои гирифтани ишораҳои кӯмакӣ",
        aceEditorRowTitle: "Сатрҳои ҷорӣ",
        aceEditorPanelTitle: "Бастаи ҷорӣ",
        showMore: "Барои гирифтани маълумоти мушаххастар, илтимос, ба дастурамал гузаред",
        assistantTitle: "Саволҳои дастрас:",
        cellsEmptyRowsColumns: "Бояд ақалан як сатр ё сутун бошад",
        // showPreviewBeforeComplete: "Review before submit",
        // overridingPropertyPrefix: "Enabled by a condition",
        // resetToDefaultCaption: "Reset",
        propertyIsEmpty: "Илтимос, қимматро ворид кунед",
        // propertyIsNoUnique: "Please enter a unique value",
        propertyNameIsNotUnique: "Лутфан як номи беҳамто ворид кунед",
        // propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\".",
        listIsEmpty: "Ҳолати нав илова кунед",
        // "listIsEmpty@choices": "You don't have any choices yet",
        // "listIsEmpty@columns": "You don't have any columns yet",
        // "listIsEmpty@rows": "You don't have any rows yet",
        // "listIsEmpty@validators": "You don't have any validation rules yet",
        // "listIsEmpty@calculatedValues": "You don't have any custom variables yet",
        // "listIsEmpty@triggers": "You don't have any triggers yet",
        // "listIsEmpty@navigateToUrlOnCondition": "You don't have any links yet",
        // "addNew@choices": "Add new choice",
        // "addNew@columns": "Add new column",
        // "addNew@rows": "Add new row",
        // "addNew@validators": "Add new rule",
        // "addNew@calculatedValues": "Add new variable",
        // "addNew@triggers": "Add new trigger",
        // "addNew@navigateToUrlOnCondition": "Add new URL",
        expressionIsEmpty: "Ибораи холӣ аст",
        value: "Қиммат",
        text: "Матн",
        rowid: "ID-и сатр",
        imageLink: "Истинод ба сурат",
        columnEdit: "Иваз додани сутун: {0}",
        itemEdit: "Тағйир додани элемент: {0}",
        url: "URL",
        path: "Роҳ",
        choicesbyurl: {
        // url: "Web service URL",
        // valueName: "Get value to store from the following property"
        },
        titleName: "Сарлавҳаи нуқта",
        // imageLinkName: "Get file URLs from the following property",
        // allowEmptyResponse: "Accept empty response",
        titlePlaceholder: "Сарлавҳа ворид кунед",
        surveyTitlePlaceholder: "Сарлавҳаи пурсишро ворид кунед",
        pageTitlePlaceholder: "Сарлавҳаи саҳифаро ворид кунед",
        descriptionPlaceholder: "Тавсифро ворид кунед",
        surveyDescriptionPlaceholder: "Тавсифи пурсишро ворид кунед",
        pageDescriptionPlaceholder: "Тавсифи саҳифаро ворид кунед",
        // textWrapEnabled: "Wrap choices",
        showOtherItem: "Нуқтаи 'Дигар' вуҷуд аст",
        otherText: "Манти нуқтаи 'Дигар'",
        showNoneItem: "Ягон нуқта вуҷуд надорад",
        // showRefuseItem: "Enable the \"Refuse to Answer\" option",
        // showDontKnowItem: "Enable the \"Don't Know\" option",
        noneText: "Матни нуқтаи 'Ҳиҷӣ'",
        showSelectAllItem: "Ҳамаи нуқтаҳоро интихоб кардан",
        selectAllText: "Матни нуқта 'Ҳамаи нуқтаҳоро интихоб кардан'",
        choicesMin: "Қиммати минималӣ барои элементҳои сохташуда бо роҳи автоматӣ",
        choicesMax: "Қиммати максималӣ барои элементҳои сохташуда бо роҳи автоматӣ",
        choicesStep: "Фарқият байни элементҳои сохташуда бо роҳи автоматӣ",
        name: "Ном",
        title: "Сарлавҳа",
        cellType: "Намдуи катакча",
        // colCount: "Column count",
        choicesOrder: "Интихоб кардани фармоиши интихоб",
        visible: "Нишон додан?",
        isRequired: "Ҳатмӣ?",
        // markRequired: "Mark as required",
        // removeRequiredMark: "Remove the required mark",
        isAllRowRequired: "Ҳамаи сатрҳо барои пуркунӣ ҳатмӣ мебошад",
        // eachRowUnique: "Prevent duplicate responses in rows",
        requiredErrorText: "Ин майдон баро пуркунӣ ҳатмист",
        startWithNewLine: "Аз сатри нав сар кардан?",
        rows: "Шумораи сатрҳо",
        // cols: "Columns",
        // placeholder: "Placeholder text within input field",
        showPreview: "Нишон додани пешнамоиш?",
        storeDataAsText: "Нигоҳ доштани дохили файл дар формати JSON ҳамчун матн",
        // maxSize: "Maximum file size (in bytes)",
        rowCount: "Шумораи сатрҳо",
        columnLayout: "Макети сутунҳо",
        addRowLocation: "Илова кардани ҷойи тугмаи сатр",
        // transposeData: "Transpose rows to columns",
        addRowText: "Илова кардани матни тугмаи сатр",
        removeRowText: "Нест кардани тугмаи матн",
        rateMin: "Рейтинги минималӣ",
        rateMax: "Рейтинги максималӣ",
        rateStep: "Қадами рейтинг",
        minRateDescription: "Маълумот барои рейтинги минималӣ",
        maxRateDescription: "Маълумот барои рейтинги максималӣ",
        inputType: "Намуди дохилкунӣ",
        optionsCaption: "Танзимотҳои имзо",
        // defaultValue: "Default Answer",
        cellsDefaultRow: "Матни нобаёни катак",
        surveyEditorTitle: "Танзимоти саволнома",
        qEditorTitle: "Тағйир додани: {0}",
        maxLength: "Шумораи максималӣ",
        buildExpression: "Сохтан",
        editExpression: "Таҳрир кунед",
        // and: "and",
        // or: "or",
        remove: "Ҷойивазкунӣ",
        addCondition: "шарт илова кунед",
        // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
        // if: "If",
        // then: "then",
        // setToName: "Target question",
        // fromName: "Question to copy answer from",
        // gotoName: "Question to skip to",
        // ruleIsNotSet: "Rule is incorrect",
        // includeIntoResult: "Add to the survey results",
        showTitle: "Нишон/пинҳон кардани сарлавҳа",
        // expandCollapseTitle: "Expand/collapse title",
        locale: "Забон ба нобаён",
        simulator: "Таҷҳизотро интихоб кунед",
        landscapeOrientation: "Манзаравӣ",
        // portraitOrientation: "Switch to portrait orientation",
        mode: "Намуд (тағйирот/намоиш)",
        clearInvisibleValues: "Тоза кардани қимматҳои ноёан",
        cookieName: "Номи Cookie (куштани такроран локалӣ гузаштани саволнома)",
        sendResultOnPageNext: "Нишон додани натиҷаи саволнома дар саҳифаи наздик",
        storeOthersAsComment: "Нигоҳ доштани қиммати 'Дигар' дар майдони алоҳида",
        showPageTitles: "Нишон додани сарлавҳаи саҳифа",
        showPageNumbers: "Нишон додани рақами саҳифа",
        pagePrevText: "Матн дар тугмаи 'Саҳифаи пештара'",
        pageNextText: "Матн дар тугмаи 'Саҳифаи оянда'",
        completeText: "Матн дар тугмаи 'Анҷом додан'",
        // previewText: "\"Review Answers\" button text",
        // editText: "\"Edit Answer\" button text",
        startSurveyText: "Матн дар тугмаи 'Сар кардан'",
        showNavigationButtons: "Нишон додани тугмаҳои новбарӣ (новбарии нобаён)",
        showPrevButton: "Нишон додани тугмаи 'Саҳифаи пештара' (истифодабар метавонад ба саҳифаи пештара баргардад)",
        firstPageIsStarted: "Саҳифаи якуми саволнома саҳифаи саршаванда мебошад.",
        showCompletedPage: "Нишон додани саҳифа бо матн дар анҷоми пуркунӣ (HTML-и саҳифаи анҷом)",
        goNextPageAutomatic: "Гузариш ба саҳифаи оянда ба роҳи автоматӣ дар ҳолати пуркунии ҳамаи саволҳо",
        // allowCompleteSurveyAutomatic: "Complete the survey automatically",
        showProgressBar: "Нишон додани пешравии пуркунӣ",
        questionTitleLocation: "Ҷойгиршавии сарлавҳаи савол",
        requiredText: "Аломат барои саволи ҳатмӣ",
        questionTitleTemplate: "Намунаи номи саволнома, ҳамчун нобаён: {матнро} {талаб} {намекунад}.",
        questionErrorLocation: "Ҷойгиркунии хатогии саволнома",
        focusFirstQuestionAutomatic: "Гузариш ба саволи якум дар ивазкунии саҳифа",
        questionsOrder: "Мураттабсозии элементҳо дар саҳифа",
        maxTimeToFinish: "Вақти максималӣ дар сонияҳо, барои пур кардани саволнома",
        maxTimeToFinishPage: "Вақти максималӣ дар сонияҳо, барои пур кардани саҳифаи саволнома",
        showTimerPanel: "Нишон додани бастаи вақтсанҷ",
        showTimerPanelMode: "Нишон додани ҳолати бастаи таймер",
        // renderMode: "Panel display mode",
        allowAddPanel: "Иҷозат додан ба илова кардани бастаҳо",
        allowRemovePanel: "Иҷозат додан ба нест кардани бастаҳо",
        panelAddText: "Иловаи матн ба баста",
        panelRemoveText: "Нест кардани матн ба баста",
        isSinglePage: "Нишон додани ҳамаи элементҳо дар як саҳифа",
        // html: "HTML markup",
        // setValue: "Answer",
        // dataFormat: "Storage format",
        // allowAddRows: "Enable row addition",
        // allowRemoveRows: "Enable row removal",
        // allowRowsDragAndDrop: "Enable row reordering",
        // responsiveImageSizeHelp: "Does not apply if you specify the exact display area width or height.",
        // minImageWidth: "Minimum display area width",
        // maxImageWidth: "Maximum display area width",
        // minImageHeight: "Minimum display area height",
        // maxImageHeight: "Maximum display area height",
        minValue: "Қиммати минималӣ",
        maxValue: "Қиммати максималӣ",
        // minLength: "Minimum length (in characters)",
        allowDigits: "Иҷозат додани рақамҳо",
        minCount: "Шумораи минималӣ",
        maxCount: "Шумораи максималӣ",
        regex: "Ифодаи регулярӣ",
        surveyvalidator: {
        // text: "Error message",
        // expression: "Validation expression"
        },
        totalText: "Тексти умумӣ",
        totalType: "Намуди умумӣ",
        totalExpression: "Ифодаи умумӣ",
        totalDisplayStyle: "Услуби намоиши умумӣ",
        totalCurrency: "Асъори умумӣ",
        totalFormat: "Намуди умумӣ",
        // logo: "Survey logo",
        // questionsOnPageMode: "Survey layout",
        // maxTextLength: "Restrict answer length",
        // maxOthersLength: "Restrict comment length",
        // autoGrowComment: "Auto-expand text areas",
        // allowResizeComment: "Allow users to resize text areas",
        // textUpdateMode: "Update input field values",
        // maskType: "Input mask type",
        maskTypes: {
        // none: "None",
        // patternmask: "Pattern",
        // numericmask: "Numeric",
        // datetimemask: "Date and Time",
        // currencymask: "Currency"
        },
        // focusOnFirstError: "Set focus on the first invalid answer",
        // checkErrorsMode: "Run validation",
        // navigateToUrl: "Redirect to an external link after submission",
        // navigateToUrlOnCondition: "Dynamic external link",
        // completedBeforeHtml: "Markup to show if the user already filled out this survey",
        // completedHtml: "\"Thank You\" page markup",
        // completedHtmlOnCondition: "Dynamic \"Thank You\" page markup",
        // loadingHtml: "Markup to show while survey model is loading",
        // commentText: "Comment area text",
        // autocomplete: "Autocomplete type",
        // labelTrue: "Label for \"True\"",
        // labelFalse: "Label for \"False\"",
        // allowClear: "Show the Clear button",
        // searchMode: "Search Mode",
        // displayStyle: "Display format",
        // format: "Formatted string",
        // maximumFractionDigits: "Maximum fractional digits",
        // minimumFractionDigits: "Minimum fractional digits",
        // useGrouping: "Display grouping separators",
        // allowMultiple: "Enable multiple file upload",
        // allowImagesPreview: "Preview uploaded images",
        // acceptedTypes: "Accepted file types",
        // waitForUpload: "Wait for upload to complete",
        // needConfirmRemoveFile: "Confirm file deletion",
        // detailPanelMode: "Row expansion alignment",
        // minRowCount: "Minimum row count",
        // maxRowCount: "Maximum row count",
        // confirmDelete: "Confirm row deletion",
        // confirmDeleteText: "Confirmation message",
        // panelCount: "Initial panel count",
        // minPanelCount: "Minimum panel count",
        // maxPanelCount: "Maximum panel count",
        // panelsState: "Inner panel collapse state",
        // panelPrevText: "\"Previous Panel\" button text",
        // panelNextText: "\"Next Panel\" button text",
        // showRangeInProgress: "Show the progress bar",
        // panelRemoveButtonLocation: "\"Remove Panel\" button alignment",
        // hideIfRowsEmpty: "Hide the question if it has no rows",
        // hideColumnsIfEmpty: "Hide columns if there are no rows",
        // rateValues: "Custom rating values",
        // rateCount: "Rating count",
        // autoGenerate: "Rating configuration",
        // hideIfChoicesEmpty: "Hide the question if it has no choices",
        // minWidth: "Minimum width",
        // maxWidth: "Maximum width",
        // width: "Width",
        // showHeader: "Show column headers",
        // horizontalScroll: "Show horizontal scrollbar",
        // columnMinWidth: "Minimum column width",
        // rowTitleWidth: "Row header width",
        // valueTrue: "Value to store when \"True\" is selected",
        // valueFalse: "Value to store when \"False\" is selected",
        // minErrorText: "\"Value is below minimum\" error message",
        // maxErrorText: "\"Value exceeds maximum\" error message",
        // otherErrorText: "\"Empty comment\" error message",
        // keyDuplicationError: "Error message for duplicate responses",
        // minSelectedChoices: "Minimum choices to select",
        // maxSelectedChoices: "Maximum choices to select",
        // showClearButton: "Show the Clear button",
        // logoWidth: "Logo width",
        // logoHeight: "Logo height",
        // readOnly: "Read-only",
        // enableIf: "Disable the read-only mode if",
        // emptyRowsText: "\"No rows\" message",
        // separateSpecialChoices: "Separate special choices",
        // choicesFromQuestion: "Copy choices from the following question",
        // choicesFromQuestionMode: "Which choice options to copy",
        // progressBarShowPageTitles: "Display page titles in progress bar",
        // progressBarShowPageNumbers: "Display page numbers in progress bar",
        // showCommentArea: "Add a comment box",
        // commentPlaceholder: "Placeholder text for the comment box",
        // displayRateDescriptionsAsExtremeItems: "Show the labels as extreme values",
        // rowsOrder: "Row order",
        // columnsLayout: "Column layout",
        // columnColCount: "Nested column count",
        // correctAnswer: "Correct Answer",
        // defaultPanelValue: "Default Values",
        // cells: "Cell Texts",
        // keyName: "Prevent duplicate responses in the following column",
        itemvalue: {
        // visibleIf: "Make the option visible if",
        // enableIf: "Make the option selectable if"
        },
        "itemvalue@rows": {
        // visibleIf: "Make the row visible if",
        // enableIf: "Make the row editable if"
        },
        imageitemvalue: {
        // text: "Alt text"
        },
        logoPosition: "Ҷойгиршавии логотип",
        addLogo: "Иловаи логотип...",
        changeLogo: "Тағйир додани логотип...",
        logoPositions: {
            none: "Разместить логотип",
            left: "Аз чап",
            right: "Дар тарафи рост",
            top: "Аз боло",
            bottom: "Аз поён"
        },
        // Creator tabs
        tabs: {
            panel: {
            // layout: "Panel Layout"
            },
            general: "Умумӣ",
            fileOptions: "Танзимотҳо",
            // html: "HTML Editor",
            columns: "Сутунҳо",
            rows: "Сатрҳо",
            choices: "Интихоб",
            items: "Элементҳо",
            visibleIf: "Нишон додан, агар",
            enableIf: "Дастрас аст, агар",
            requiredIf: "Ҳатмӣ барои пуркунӣ, агар",
            rateValues: "Баҳодиҳии қимматбаҳои савол",
            choicesByUrl: "Интихоб аз интернет",
            matrixChoices: "Интихоби нобаён",
            multipleTextItems: "Дохилкунии якчанд майдончаҳои матнӣ",
            // numbering: "Numbering",
            validators: "Валидаторҳо",
            navigation: "Новбарӣ",
            question: "Савол",
            // pages: "Pages",
            timer: "Вақтсанҷ/Викторина",
            calculatedValues: "Қимматҳои ҳисобкунӣ",
            triggers: "Триггерҳо",
            templateTitle: "Номи намуна",
            totals: "Натиҷаҳо",
            logic: "Мантиқ",
            // mask: "Input Mask Settings",
            layout: {
            // panel: "Panel Layout",
            // question: "Layout",
            // base: "Layout"
            },
            data: "Маълумот",
            validation: "Санҷед",
            cells: "Ҳуҷайраҳо",
            showOnCompleted: "Дар охир нишон диҳед",
            logo: "Логитип дар сарлавҳаи саволнома",
            // slider: "Slider",
            // expression: "Expression",
            // questionSettings: "Question Settings",
            others: "Дигар"
        },
        editProperty: "Тағйири хосияти '{0}'",
        items: "[Элементҳо: {0}]",
        // choicesVisibleIf: "Make choices visible if",
        // choicesEnableIf: "Make choices selectable if",
        // columnsEnableIf: "Make columns visible if",
        // rowsEnableIf: "Make rows visible if",
        // innerIndent: "Increase the inner indent",
        // defaultValueFromLastRow: "Use answers from the last row as default",
        // defaultValueFromLastPanel: "Use answers from the last panel as default",
        enterNewValue: "Илтимос, қимматро ворид кунед.",
        noquestions: "Дар саволнома ягон савол нест",
        createtrigger: "Илтимос, триггерро созед",
        // titleKeyboardAdornerTip: "Press enter button to edit",
        // keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
        triggerOn: "О",
        triggerMakePagesVisible: "Саҳифаҳоро намоён кардан:",
        triggerMakeQuestionsVisible: "Элементҳоро номаён кардан:",
        triggerCompleteText: "Тамом кардани саволнома, агар ҳама иҷро шавад.",
        triggerNotSet: "Триггер сабт нашудааст.",
        triggerRunIf: "Сар кардан, агар",
        triggerSetToName: "Тағйири қиммат:",
        triggerFromName: "Нусхабардорӣ кардани қиммат аз:",
        triggerRunExpression: "Иҷро кардани ин ифода:",
        triggerSetValue: "ба:",
        triggerGotoName: "Гузариш ба савол:",
        triggerIsVariable: "Тағйирёбандаро ба натиҷаи саволнома нагузоштан.",
        triggerRunExpressionEmpty: "Илтимос, қиммати дурустро ворид кунед.",
        // emptyExpressionPlaceHolder: "Type expression here...",
        // noFile: "No file chosen",
        // clearIfInvisible: "Clear hidden question values",
        // valuePropertyName: "Store values in the following property",
        // searchEnabled: "Enable search-as-you-type",
        // hideSelectedItems: "Hide selected items",
        // closeOnSelect: "Collapse the dropdown upon selection",
        // verticalAlign: "Vertical alignment within cells",
        // alternateRows: "Alternate row colors",
        // columnsVisibleIf: "Make columns visible if",
        // rowsVisibleIf: "Make rows visible if",
        // otherPlaceholder: "Placeholder text for the comment box",
        // filePlaceholder: "Placeholder text for Local file",
        // photoPlaceholder: "Placeholder text for Camera",
        // fileOrPhotoPlaceholder: "Placeholder text for Local file or Camera",
        // rateType: "Rating icon",
        // url_placeholder: "Ex.: https://api.example.com/books",
        // path_placeholder: "Ex.: categories.fiction",
        // questionStartIndex_placeholder: "Ex.: a)",
        // width_placeholder: "Ex.: 6in",
        // minWidth_placeholder: "Ex.: 600px",
        // maxWidth_placeholder: "Ex.: 50%",
        // imageHeight_placeholder: "auto",
        // imageWidth_placeholder: "auto"
    },
    // Property values
    pv: {
        // "true": "true",
        // "false": "false",
        // file: "Local file",
        // camera: "Camera",
        // "file-camera": "Local file or Camera",
        inherit: "Меросгирӣ кардан",
        show: "Нишон додан",
        hide: "Пинҳон кардан",
        default: "Нобаёнӣ",
        initial: "Тартиботи аввала",
        random: "Тартиботи тасодуфӣ",
        collapsed: "Қатъ шуд",
        expanded: "Зиёд шуд",
        none: "Не",
        asc: "Ба калоншавӣ",
        desc: "Ба камшавӣ",
        indeterminate: "Номуайян",
        // selected: "Selected",
        // unselected: "Unselected",
        // decimal: "decimal",
        // currency: "currency",
        // percent: "percent",
        firstExpanded: "Якум зиёд шудааст",
        off: "Куштан",
        list: "Рӯйхат",
        progressTop: "progressTop",
        progressBottom: "progressBottom",
        progressTopBottom: "progressTopBottom",
        // tab: "Tabs",
        horizontal: "Уфуқӣ",
        vertical: "Амудӣ",
        top: "Аз боло",
        bottom: "Аз поён",
        topBottom: "Аз боло ва поён",
        // both: "Both",
        left: "Чап",
        // right: "Right",
        // center: "Center",
        // leftRight: "Left and right",
        // middle: "Middle",
        // color: "color",
        // date: "date",
        // datetime: "datetime",
        // "datetime-local": "datetime-local",
        // email: "email",
        // month: "month",
        // number: "number",
        // password: "password",
        // range: "range",
        // tel: "tel",
        // text: "text",
        // time: "time",
        // url: "url",
        // week: "week",
        hidden: "Пинҳон",
        edit: "Тағйир додан",
        display: "Намоиш",
        // contain: "Contain",
        // cover: "Cover",
        // fill: "Fill",
        // next: "Next",
        // last: "Last",
        onComplete: "Пас аз анҷом",
        onHidden: "Пас аз пинҳон",
        // onHiddenContainer: "When question or its panel/page gets hidden",
        clearInvisibleValues: {
        // none: "Never"
        },
        clearIfInvisible: {
        // none: "Never"
        },
        inputType: {
        // color: "Color",
        // date: "Date",
        // "datetime-local": "Date and Time",
        // email: "Email",
        // month: "Month",
        // number: "Number",
        // password: "Password",
        // range: "Range",
        // tel: "Phone Number",
        // text: "Text",
        // time: "Time",
        // url: "URL",
        // week: "Week"
        },
        all: "Ҳама",
        page: "Саҳифа",
        survey: "Саволнома",
        onNextPage: "Дар гузариш ба саҳифаи оянда",
        onValueChanged: "Дар тағйири қиммат",
        // onValueChanging: "Before an answer is changed",
        questionsOnPageMode: {
        // standard: "Original structure",
        // singlePage: "Show all questions on one page",
        // questionPerPage: "Show single question per page"
        },
        // noPreview: "No preview",
        // showAllQuestions: "Show all questions",
        // showAnsweredQuestions: "Show answered questions only",
        // pages: "Completed pages",
        // questions: "Answered questions",
        // requiredQuestions: "Answered required questions",
        // correctQuestions: "Valid answers",
        // buttons: "Completed pages (button UI)",
        // underInput: "Under the input field",
        // underTitle: "Under the question title",
        // onBlur: "On lost focus",
        // onTyping: "While typing",
        // underRow: "Under the row",
        // underRowSingle: "Under the row, display one row expansion only",
        // auto: "Auto",
        showNavigationButtons: {
        // none: "Hidden"
        },
        showTimerPanel: {
        // none: "Hidden"
        },
        showTimerPanelMode: {
        // all: "Both"
        },
        addRowLocation: {
        // default: "Based on matrix layout"
        },
        panelsState: {
        // default: "Locked",
        // collapsed: "Collapse all",
        // expanded: "Expand all",
        // firstExpanded: "First expanded"
        },
        widthMode: {
        // static: "Static",
        // responsive: "Responsive"
        },
        contentMode: {
        // image: "Image",
        // video: "Video",
        // youtube: "YouTube"
        },
        displayMode: {
        // buttons: "Buttons",
        // dropdown: "Dropdown"
        },
        rateColorMode: {
        // default: "Default",
        // scale: "Scale"
        },
        scaleColorMode: {
        // monochrome: "Monochrome",
        // colored: "Colored"
        },
        autoGenerate: {
        // "true": "Auto-generate",
        // "false": "Manual"
        },
        rateType: {
        // labels: "Labels",
        // stars: "Stars",
        // smileys: "Smileys"
        },
        state: {
        // default: "Locked"
        },
        showQuestionNumbers: {
        // default: "Auto-numbering",
        // on: "Auto-numbering",
        // onPage: "Reset on each page",
        // onpanel: "Reset on each panel",
        // onPanel: "Reset on each panel",
        // onSurvey: "Continue across the survey",
        // off: "No numbering"
        },
        descriptionLocation: {
        // underTitle: "Under the question title",
        // underInput: "Under the input field"
        },
        selectToRankAreasLayout: {
        // horizontal: "Next to choices",
        // vertical: "Above choices"
        },
        displayStyle: {
        // decimal: "Decimal",
        // currency: "Currency",
        // percent: "Percentage",
        // date: "Date"
        },
        totalDisplayStyle: {
        // decimal: "Decimal",
        // currency: "Currency",
        // percent: "Percentage",
        // date: "Date"
        },
        rowsOrder: {
        // initial: "Original"
        },
        questionsOrder: {
        // initial: "Original"
        },
        showProgressBar: {
        // off: "Hidden",
        // topbottom: "Top and bottom",
        // aboveheader: "Above the header",
        // belowheader: "Below the header"
        },
        // sum: "Sum",
        // count: "Count",
        // min: "Min",
        // max: "Max",
        // avg: "Avg",
        searchMode: {
        // contains: "Contains",
        // startsWith: "Starts with"
        }
    },
    // Operators
    op: {
        empty: "пур накарда",
        notempty: "пур карда",
        equal: "баробар",
        notequal: "нобаробар",
        contains: "дар бар дорад",
        notcontains: "дар бар надорад",
        anyof: "ҳар як аз",
        allof: "ҳама аз",
        greater: "зиёдтар",
        less: "камтар",
        greaterorequal: "калон ё баробар",
        lessorequal: "кам ё баробар",
        // and: "and",
        // or: "or"
    },
    // Embed window
    ew: {
        angular: "Истифода баред версияи Angular",
        jquery: "Истифода баред версияи jQuery",
        knockout: "Истифода баред версияи Knockout",
        react: "Истифода баред версияи React",
        vue: "Истифода баред версияи Vue",
        bootstrap: "Барои китобхонаи bootstrap",
        // modern: "Modern theme",
        // default: "Default theme",
        // orange: "Orange theme",
        // darkblue: "Darkblue theme",
        // darkrose: "Darkrose theme",
        // stone: "Stone theme",
        // winter: "Winter theme",
        // winterstone: "Winter-Stone theme",
        showOnPage: "Нишон додани саволнома дар саҳифа",
        showInWindow: "Нишон додани саволнома дар равзанаи модалӣ",
        loadFromServer: "Бор кардани Json саволнома аз сервер",
        titleScript: "Скриптҳо и услубҳо",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    // Preview (Survey)
    ts: {
        selectPage: "Саҳифаро интихоб кунед, барои санҷидани ин:",
        showInvisibleElements: "Нишон додани элементҳои пинҳон",
        // hideInvisibleElements: "Hide invisible elements"
    },
    validators: {
        answercountvalidator: "Шумораи ҷавобҳо",
        // emailvalidator: "Email",
        expressionvalidator: "Ишора",
        numericvalidator: "Рақам",
        regexvalidator: "Ишораи регулярӣ",
        textvalidator: "Матн"
    },
    triggers: {
        completetrigger: "Анҷом додани саволнома",
        setvaluetrigger: "Гузоштани қиммат",
        copyvaluetrigger: "Нусхабардорӣ кардани қиммат",
        skiptrigger: "Гузариш ба саволи",
        runexpressiontrigger: "Иҷро кардани ишора",
        visibletrigger: "Тағйир кардани намоиш (тавсия дода намешавад)"
    },
    peplaceholder: {
        patternmask: {
            pattern: "Ex.: +1(999)-999-99-99"
        },
        datetimemask: {
            pattern: "Ex.: mm/dd/yyyy"
        },
        currencymask: {
            prefix: "Ex.: $",
            suffix: "Ex.: USD"
        }
    },
    pehelp: {
        panel: {
        // name: "A panel ID that is not visible to respondents.",
        // description: "Type a panel subtitle.",
        // visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility.",
        // enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel.",
        // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
        // questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default).",
        // questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
        // questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
        // page: "Repositions the panel to the end of a selected page.",
        // innerIndent: "Adds space or margin between the panel content and the left border of the panel box.",
        // startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form.",
        // state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed.",
        // width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
        },
        paneldynamic: {
        // name: "A panel ID that is not visible to respondents.",
        // description: "Type a panel subtitle.",
        // visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility.",
        // enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel.",
        // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
        // templateTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default).",
        // templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default).",
        // errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
        // page: "Repositions the panel to the end of a selected page.",
        // innerIndent: "Adds space or margin between the panel content and the left border of the panel box.",
        // startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form.",
        // state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed.",
        // width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.).",
        // templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering.",
        // templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering.",
        // templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression.",
        // titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default).",
        // descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default).",
        // newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one.",
        // defaultValueFromLastPanel: "Duplicates answers from the last panel and assigns them to the next added dynamic panel.",
        // keyName: "Reference a question name to require a user to provide a unique response for this question in each panel."
        },
        // defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input.",
        // resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set).",
        // setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response.",
        // setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input.",
        question: {
            // name: "A question ID that is not visible to respondents.",
            // description: "Type a question subtitle.",
            // visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility.",
            // enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question.",
            // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer.",
            // startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form.",
            // page: "Repositions the question to the end of a selected page.",
            // state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed.",
            // titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default).",
            // descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default).",
            // errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default).",
            // indent: "Adds space or margin between the question content and the left border of the question box.",
            // width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.).",
            surveyvalidator: {
            // expression: "Use the magic wand icon to set a validation rule for the question."
            },
            // textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default).",
            // url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data.",
            // searchMode: "A comparison operation used to filter the drop-down list.",
            // textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
        },
        signaturepad: {
        // signatureWidth: "Sets the width of the displayed signature area and the resulting image.",
        // signatureHeight: "Sets the height of the displayed signature area and the resulting image.",
        // signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
        },
        file: {
        // imageHeight: "Adjusts the height of the image in the survey results.",
        // imageWidth: "Adjusts the width of the image in the survey results."
        },
        image: {
        // contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
        },
        imagepicker: {
        // imageHeight: "Overrides the minimum and maximum height values.",
        // imageWidth: "Overrides the minimum and maximum width values.",
        // choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents.",
        // contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
        },
        text: {
        // size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>."
        },
        comment: {
        // rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
        },
        // survey templates
        survey: {
        // mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing."
        },
        matrixdropdowncolumn: {
        // name: "A column ID that is not visible to respondents.",
        // isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column.",
        // rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear.",
        // visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility.",
        // enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column.",
        // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
        // showInMultipleColumns: "When selected, creates an individual column for each choice option."
        },
        // widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used.",
        // cookieName: "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions.",
        // logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB).",
        // logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.).",
        // logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.).",
        // logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio.",
        // goNextPageAutomatic: "Select if you want the survey to advance to the next page automatically after a respondent answers all questions on the current page.",
        // allowCompleteSurveyAutomatic: "Select if you want the survey to complete automatically after a respondent answers all questions.",
        // showNavigationButtons: "Sets the visibility and location of navigation buttons on a page.",
        // showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header.",
        // showPreviewBeforeComplete: "Enable the preview page with all or answered questions only.",
        // questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level.",
        // requiredText: "A symbol or a sequence of symbols indicating that an answer is required.",
        // questionStartIndex: "Enter a number or letter with which you want to start numbering.",
        // questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box.",
        // focusFirstQuestionAutomatic: "Select if you want the first input field on each page ready for text entry.",
        // questionsOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab.",
        // maxTextLength: "For text entry questions only.",
        // maxOthersLength: "For question comments only.",
        // autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length.",
        // allowResizeComment: "For question comments and Long Text questions only.",
        // calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on.",
        // includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results.",
        // triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects.",
        // clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it.",
        // textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing.",
        // columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents.",
        // rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents.",
        // columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.).",
        // rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.).",
        // totalText: "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\".",
        // cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property.",
        // keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message.",
        // totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.).",
        // confirmDelete: "Triggers a prompt asking to confirm the row deletion.",
        // defaultValueFromLastRow: "Duplicates answers from the last row and assigns them to the next added dynamic row.",
        // keyName: "Reference a column ID to require a user to provide a unique response for each question within the specified column.",
        // description: "Type a subtitle.",
        // locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab.",
        // detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed.",
        // imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio.",
        // autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting.",
        // allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field.",
        // maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page.",
        // maxTimeToFinishPage: "A time interval in seconds after which the survey auto-advances to the next page.",
        page: {
        // maxTimeToFinish: "A time interval in seconds after which the survey auto-advances to the next page.",
        // visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility.",
        // enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page.",
        // requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
        // questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default).",
        // questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default).",
        // questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab.",
        // navigationButtonsVisibility: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
        },
        // showTimerPanel: "Sets the visibility and location of a timer on a page.",
        // panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded.",
        // imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list.",
        // choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents.",
        // title: "Type a user-friendly title to display.",
        // waitForUpload: "Ensures that users won't complete the survey until files are uploaded.",
        // minWidth: "Accepts CSS values (px, %, in, pt, etc.).",
        // maxWidth: "Accepts CSS values (px, %, in, pt, etc.).",
        // width: "Accepts CSS values (px, %, in, pt, etc.).",
        // valueName: "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name.",
        // useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements.",
        // clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default).",
        // choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question.",
        // showOtherItem: "When selected, users can include additional input in a separate comment box.",
        // separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout.",
        // path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array.",
        choicesbyurl: {
        // valueName: "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
        },
        // titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list.",
        // allowEmptyResponse: "Select to allow the service to return an empty response or array.",
        // choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options.",
        // rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents.",
        rating: {
        // displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
        },
        // valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values.",
        // searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field.",
        // valueTrue: "A value to save in survey results when respondents give a positive answer.",
        // valueFalse: "A value to save in survey results when respondents give a negative answer.",
        // showPreview: "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded.",
        // needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion.",
        // selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area.",
        // dataList: "Enter a list of choices that will be suggested to the respondent during input.",
        // itemSize: "The setting only resizes the input fields and doesn't affect the width of the question box.",
        // itemTitleWidth: "Sets consistent width for all item labels in pixels",
        // altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes.",
        // rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale.",
        expression: {
        // name: "An expression ID that is not visible to respondents.",
        // description: "Type an expression subtitle.",
        // expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
        },
        // storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results.",
        // format: "Use {0} as a placeholder for the actual value.",
        // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
        // columnColCount: "Applies only if \"Cell input type\" is set to Radio Button Group or Checkboxes.",
        // autocomplete: "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion.",
        // filePlaceholder: "Applies when \"File source type\" is \"Local file\" or when camera is unavailable",
        // photoPlaceholder: "Applies when \"File source type\" is \"Camera\".",
        // fileOrPhotoPlaceholder: "Applies when \"File source type\" is \"Local file or camera\".",
        masksettings: {
        // saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results."
        },
        patternmask: {
        // pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
        },
        datetimemask: {
        // pattern: "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
        },
        numericmask: {
        // decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number.",
        // thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three.",
        // precision: "Limits how many digits to retain after the decimal point for a displayed number."
        },
        currencymask: {
        // prefix: "One or several symbols to be displayed before the value.",
        // suffix: "One or several symbols to be displayed after the value."
        }
    },
    // Properties
    p: {
        title: {
            name: "Ном",
            title: "Холӣ гузоред, агар номи ӯ ҳамчун 'Ном' бошад"
        },
        // multiSelect: "Allow multiple selection",
        // showLabel: "Show image and video captions",
        // swapOrder: "Swap the order of Yes and No",
        // value: "Value",
        // tabAlign: "Tab alignment",
        // sourceType: "File source type",
        // fitToContainer: "Fit to container",
        // setValueExpression: "Set value expression",
        description: "Шарҳ",
        // logoFit: "Logo fit",
        // pages: "Pages",
        // questions: "Questions",
        triggers: "триггерҳо",
        // calculatedValues: "Custom variables",
        // surveyId: "Survey id",
        // surveyPostId: "Survey post id",
        // surveyShowDataSaving: "Survey show data saving",
        // questionDescriptionLocation: "Question description alignment",
        // progressBarType: "Progress bar type",
        // showTOC: "Show table of contents (TOC)",
        // tocLocation: "TOC alignment",
        // questionTitlePattern: "Question title pattern",
        // widthMode: "Survey width mode",
        // showBrandInfo: "Show brand info",
        // useDisplayValuesInDynamicTexts: "Use display values in dynamic texts",
        visibleIf: "Нишон додан, агар",
        // defaultValueExpression: "Default value expression",
        requiredIf: "Ҳатмист, агар",
        // resetValueIf: "Reset value if",
        // setValueIf: "Set value if",
        validators: "Валидаторҳо",
        // bindings: "Bindings",
        // renderAs: "Render as",
        // attachOriginalItems: "Attach original items",
        choices: "Интихоб",
        choicesByUrl: "Интихоб аз интернет",
        currency: "Асъор",
        // cellHint: "Cell hint",
        // totalMaximumFractionDigits: "Total maximum fraction digits",
        // totalMinimumFractionDigits: "Total minimum fraction digits",
        columns: "Сутунҳо",
        // detailElements: "Detail elements",
        // allowAdaptiveActions: "Allow adaptive actions",
        defaultRowValue: "Қимматҳои сатри нобаён",
        // detailPanelShowOnAdding: "Detail panel show on adding",
        // choicesLazyLoadEnabled: "Choices lazy load enabled",
        // choicesLazyLoadPageSize: "Choices lazy load page size",
        // inputFieldComponent: "Input field component",
        // itemComponent: "Item component",
        // min: "Min",
        // max: "Max",
        // minValueExpression: "Min value expression",
        // maxValueExpression: "Max value expression",
        // step: "Step",
        // dataList: "Items for auto-suggest",
        itemSize: "Андозаи элементҳо",
        // itemTitleWidth: "Item label width (in px)",
        // elements: "Elements",
        // content: "Content",
        navigationButtonsVisibility: "Нишон додани тугмаҳои новбарӣ",
        // navigationTitle: "Navigation title",
        // navigationDescription: "Navigation description",
        // longTap: "Long tap",
        // autoGrow: "Expand input field dynamically",
        // allowResize: "Enable resize handle",
        // acceptCarriageReturn: "Accept carriage return",
        // displayMode: "Display mode",
        // rateType: "Rate type",
        label: "Миёнабур",
        // contentMode: "Content mode",
        // imageFit: "Image and thumbnail fit",
        // altText: "Alt text",
        // height: "Height",
        // penColor: "Pen color",
        // backgroundColor: "Background color",
        // templateElements: "Template elements",
        // operator: "Operator",
        // isVariable: "Is variable",
        // runExpression: "Run expression",
        // showCaption: "Show caption",
        // iconName: "Icon name",
        // iconSize: "Icon size",
        // precision: "Precision",
        // matrixDragHandleArea: "Matrix drag handle area",
        // backgroundImage: "Background image",
        // backgroundImageFit: "Background image fit",
        // backgroundImageAttachment: "Background image attachment",
        // backgroundOpacity: "Background opacity",
        // selectToRankEnabled: "Allow selective ranking",
        // selectToRankAreasLayout: "Ranking area alignment",
        // selectToRankEmptyRankedAreaText: "Text to show if all options are selected",
        // selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area",
        // allowCameraAccess: "Allow camera access",
        // scaleColorMode: "Rating icon color mode",
        // rateColorMode: "Smileys color scheme",
        // copyDisplayValue: "Copy display value"
    },
    theme: {
        // "--background": "Background color",
        // "--background-dim-light": "Background dim light color",
        // "--primary-foreground": "Primary foreground color",
        // "--foreground": "Foreground color",
        // "--base-unit": "Base unit",
        // advancedMode: "Advanced mode",
        // groupGeneral: "General",
        // groupHeader: "Header",
        // groupBackground: "Background",
        // groupAppearance: "Appearance",
        // themeName: "Theme",
        // themeMode: "Question appearance",
        // themeModePanels: "Default",
        // themeModeLightweight: "Without Panels",
        // themePaletteLight: "Light",
        // themePaletteDark: "Dark",
        // primaryColor: "Accent color",
        // primaryDefaultColor: "Default",
        // primaryDarkColor: "Hover",
        // primaryLightColor: "Selected",
        // coverTitleForecolor: "Title forecolor",
        // coverDescriptionForecolor: "Description forecolor",
        // coverOverlapEnabled: "Overlap",
        // backgroundDimColor: "Background color",
        // backgroundImage: "Background image",
        // backgroundImageFitAuto: "Auto",
        // backgroundImageFitCover: "Cover",
        // backgroundImageFitContain: "Contain",
        // backgroundImageFitFill: "Stretch",
        // backgroundImageFitTile: "Tile",
        // backgroundOpacity: "Opacity",
        // backgroundImageAttachmentFixed: "Fixed",
        // backgroundImageAttachmentScroll: "Scroll",
        // panelBackgroundTransparency: "Panel background opacity",
        // questionBackgroundTransparency: "Question background opacity",
        // questionTitle: "Question box",
        // editorPanel: "Input element",
        // backgroundCornerRadius: "Background and corner radius",
        // backcolor: "Default background",
        // hovercolor: "Hover background",
        // borderDecoration: "Border decoration",
        // accentBackground: "Accent background",
        // accentForeground: "Accent foreground",
        // primaryForecolor: "Default color",
        // primaryForecolorLight: "Disabled color",
        // colorsTitle: "Colors",
        // font: "Font",
        // lines: "Lines",
        // borderDefault: "Darker",
        // borderLight: "Lighter",
        // fontFamily: "Font family",
        // fontSize: "Font size",
        // color: "Color",
        // placeholderColor: "Placeholder color",
        // size: "Size",
        // fontWeightRegular: "Regular",
        // fontWeightHeavy: "Heavy",
        // fontWeightSemiBold: "Semi-bold",
        // fontWeightBold: "Bold",
        // scale: "Scale",
        // cornerRadius: "Corner radius",
        // surveyTitle: "Survey title font",
        // surveyDescription: "Survey description font",
        // pageTitle: "Page",
        // titleFont: "Title font",
        // descriptionFont: "Description font",
        // boxShadowX: "X",
        // boxShadowY: "Y",
        // boxShadowAddRule: "Add Shadow Effect",
        // opacity: "Opacity",
        // boxShadowBlur: "Blur",
        // boxShadowSpread: "Spread",
        // boxShadowDrop: "Drop",
        // boxShadowInner: "Inner",
        // shadow: "Shadow effects",
        // headerView: "View",
        // headerViewBasic: "Basic",
        // headerViewAdvanced: "Advanced",
        // coverInheritWidthFrom: "Content area width",
        // coverInheritWidthFromSurvey: "Same as survey",
        // coverInheritWidthFromContainer: "Fit to container",
        // coverTextAreaWidth: "Text width",
        // coverBackgroundColorSwitch: "Background color",
        // coverBackgroundColorNone: "None",
        // coverBackgroundColorAccentColor: "Accent color",
        // coverBackgroundColorCustom: "Custom",
        // horizontalAlignmentLeft: "Left",
        // horizontalAlignmentCenter: "Center",
        // horizontalAlignmentRight: "Right",
        // verticalAlignmentTop: "Top",
        // verticalAlignmentMiddle: "Middle",
        // verticalAlignmentBottom: "Bottom",
        // logoPosition: "Logo position",
        // coverTitlePosition: "Title position",
        // coverDescriptionPosition: "Description position",
        names: {
        // default: "Default",
        // sharp: "Sharp",
        // borderless: "Borderless",
        // flat: "Flat",
        // plain: "Plain",
        // doubleborder: "Double Border",
        // layered: "Layered",
        // solid: "Solid",
        // threedimensional: "3D",
        // contrast: "Contrast"
        },
        colors: {
        // teal: "Teal",
        // blue: "Blue",
        // purple: "Purple",
        // orchid: "Orchid",
        // tulip: "Tulip",
        // brown: "Brown",
        // green: "Green"
        }
    }
};
survey_creator_core__WEBPACK_IMPORTED_MODULE_0__["editorLocalization"].locales["tg"] = tgStrings;
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually


/***/ }),

/***/ "survey-creator-core":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":"SurveyCreatorCore","commonjs2":"survey-creator-core","commonjs":"survey-creator-core","amd":"survey-creator-core"} ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_creator_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=tajik.js.map