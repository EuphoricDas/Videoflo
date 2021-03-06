import { Theme } from '../types/webcomponent-config';
import { OvSettings } from '../types/ov-settings';
import { OvSettingsModel } from './ovSettings';

export class ExternalConfigModel {
	protected ovSettings: OvSettingsModel;
	protected sessionName: string;
	protected theme = Theme.DARK;
	protected nickname: string;
	protected tokens: string[];

	constructor() {
		this.ovSettings = new OvSettingsModel();
	}

	public getComponentName() {}

	public getOvSettings(): OvSettingsModel {
		return this.ovSettings;
	}
	public getSessionName(): string {
		return this.sessionName;
	}
	public getTheme(): Theme {
		return this.theme;
	}
	public getNickname(): string {
		return this.nickname;
	}
	public getTokens(): string[] {
		return this.tokens;
	}

	public getScreenToken(): string {
		return this.tokens[1];
	}
	public getWebcamToken(): string {
		return this.tokens[0];
	}

	public setOvSettings(ovSettings: OvSettings) {
		if (!!ovSettings) {
			this.ovSettings.set(ovSettings);
		}
	}
	public setSessionName(sessionName: string) {
		this.sessionName = sessionName;
	}
	public setTheme(theme: string) {
		if ((<any>Object).values(Theme).includes(theme)) {
			this.theme = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
		}
	}
	public setNickname(nickname: string) {
		this.nickname = nickname;
	}
	public setTokens(tokens: string[]) {
		this.tokens = tokens;
	}

	public canJoinToSession(): boolean {
		return this.hasReceivedToken();
	}

	public hasTokens(): boolean {
		return this.tokens?.length > 0;
	}

  private hasReceivedToken(): boolean {
		return !!this.tokens && this.tokens.length > 0 && !!this.nickname;
	}
}
