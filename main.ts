import { Plugin } from 'obsidian';
import { TimerSettingsTab} from 'settings';

interface TimerPluginSettings {
    currentTask: string;

} 

const DEFAULT_SETTINGS: Partial<TimerPluginSettings> = {
    currentTask: "That thing",
};

export default class TimerPlugin extends Plugin {
    settings: TimerPluginSettings;

    async loadSettings() { 
        this.settings = Object.assign(
            {}, 
            DEFAULT_SETTINGS, 
            await this.loadData()
        ); 
    }

    async saveSettings() {
        this.saveData();
    }

	async onload() {
        await this.loadSettings();

        this.addSettingTab(new TimerSettingsTab(this.app, this));

		this.addRibbonIcon("timer", "Simple Timer", () =>  {
            new Notice(this.settings.currentTask); 
        } );

		this.addCommand({
            id: 'timer',
		    name: "Start Timer",
		    callback: () => { new Notice("Starting Timer"); }
		})
	}

	onunload() {

	}
}
