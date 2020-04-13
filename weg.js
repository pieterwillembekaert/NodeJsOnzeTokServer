var DataIn = msg.payload;

var Init = {
    "General": {
        "Enable": true,
        "mode": {
            "auto": true,
            "manu": false
        },
        "ActualStateLight": false,
        "INsunevent": {
            "sunsetstarts": 1575203238690,
            "sunset": 1575203238690
        },
    },
    "Settings": {
        "SettingsAvond": {
            "inschakeltijdAvond": 0,
            "uitschakeltijdAvond": 0,
            "OnOffAvond": false,
            "eventAvondSunMan": {
                "sun": true,
                "manu": false
            },
            "eventAvondSun": null,
        },
        "SettingsOchtend": {
            "inschakeltijdOchtend": 0,
            "uitschakeltijdOchtend": 0,
            "OnOffOchtend": false,
            "eventOchtendSunMan": {
                "sun": true,
                "manu": false
            },
            "eventOchtendSun": null
        },
    },
    "SettingsSave": {
        "SettingsAvond": {
            "inschakeltijdAvond": 0,
            "uitschakeltijdAvond": 0,
            "OnOffAvond": false,
            "eventAvondSunMan": {
                "sun": true,
                "manu": false
            },
            "eventAvondSun": null,
        },
        "SettingsOchtend": {
            "inschakeltijdOchtend": 0,
            "uitschakeltijdOchtend": 0,
            "OnOffOchtend": false,
            "eventOchtendSunMan": {
                "sun": true,
                "manu": false
            },
            "eventOchtendSun": null
        }

    },
    "Manual": {
        "manuOnOff": false,
    },

    "Automatic": {
        "autoOnOff": false,
    },
    set sGeneral(obj) {
        this.General = obj;
    },
    get gGeneral() {
        return this.General;
    },
    set sGeneralINsunevent(obj) {
        this.General.INsunevent = obj;
    },
    get gGeneralINsunevent() {
        return this.General.INsunevent;
    },
    set sSettings(obj) {
        this.Settings = obj;
    },
    get gSettings() {
        return this.Settings;
    },

    set sSettingsAvond(obj) {
        this.Settings.SettingsAvond = obj;
    },
    get gSettingsAvond() {
        return this.Settings.SettingsAvond;
    },

    set sSettingsOchtend(obj) {
        this.Settings.SettingsOchtend = obj;
    },
    get gSettingsOchtend() {
        return this.Settings.SettingsOchtend;
    },
    set sManual(obj) {
        this.Manual = obj;
    },
    get gManual() {
        return this.Manual;
    },
    set sAutomatic(obj) {
        this.Automatic = obj;
    },
    get gAutomatic() {
        return this.Automatic;
    },
    set sSaveAvond(obj) {
        this.SettingsSave.SettingsAvond = obj;
    },
    get gSaveAvond() {
        return this.SettingsSave.SettingsAvond;
    },
    set sInschakeltijdAvond(obj) {
        this.SettingsSave.SettingsAvond.inschakeltijdAvond = obj;
    },
    get gInschakeltijdAvond() {
        return this.SettingsSave.SettingsAvond.inschakeltijdAvond;
    },

    set sUitschakeltijdAvond(obj) {
        this.SettingsSave.SettingsAvond.uitschakeltijdAvond = obj;
    },
    get gUitschakeltijdAvond() {
        return this.SettingsSave.SettingsAvond.uitschakeltijdAvond;
    },
    set sOnOffAvond(obj) {
        this.SettingsSave.SettingsAvond.OnOffAvond = obj;
    },
    get gOnOffAvond() {
        return this.SettingsSave.SettingsAvond.OnOffAvond;
    },
    set sEventAvondSunMan(obj) {
        this.SettingsSave.SettingsAvond.eventAvondSunMan = obj;
    },
    get gEventAvondSunMan() {
        return this.SettingsSave.SettingsAvond.eventAvondSunMan;
    },
    set sEventAvondSun(obj) {
        this.SettingsSave.SettingsAvond.eventAvondSun = obj;
    },
    get gEventAvondSun() {
        return this.SettingsSave.SettingsAvond.eventAvondSun;
    },

    set sSaveOchtend(obj) {
        this.SettingsSave.SettingsOchtend = obj;
    },
    get gSaveOchtend() {
        return this.SettingsSave.SettingsOchtend;
    },

    set sInschakeltijdOchtend(obj) {
        this.SettingsSave.SettingsOchtend.inschakeltijdOchtend = obj;
    },
    get gInschakeltijdOchtend() {
        return this.SettingsSave.SettingsOchtend.inschakeltijdOchtend;
    },

    set sUitschakeltijdOchtend(obj) {
        this.SettingsSave.SettingsOchtend.uitschakeltijdOchtend = obj;
    },
    get gUitschakeltijdOchtend() {
        return this.SettingsSave.SettingsOchtend.uitschakeltijdOchtend;
    },
    set sOnOffOchtend(obj) {
        this.SettingsSave.SettingsOchtend.OnOffOchtend = obj;
    },
    get gOnOffOchtend() {
        return this.SettingsSave.SettingsOchtend.OnOffOchtend;
    },
    set sEventOchtendSunMan(obj) {
        this.SettingsSave.SettingsOchtend.eventOchtendSunMan = obj;
    },
    get gEventOchtendSunMan() {
        return this.SettingsSave.SettingsOchtend.eventOchtendSunMan;
    },
    set sEventOchtendSun(obj) {
        this.SettingsSave.SettingsOchtend.eventOchtendSun = obj;
    },
    get gEventOchtendSun() {
        return this.SettingsSave.SettingsOchtend.eventOchtendSun;
    }
}
var DataSaveOchtend = false;
var DataSaveAvond = false;

global.set("SaveDataOchtend", DataSaveOchtend);
global.set("SaveDataAvond", DataSaveAvond);

global.set("Poortverlichting", Init);