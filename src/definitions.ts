import {PluginListenerHandle} from "@capacitor/core";

export interface webeventPlugin {
  eventSender(): Promise<void>;

  eventSenderWithTimer(): Promise<void>;

  addListener(
      eventName: 'sendEvent',
      listenerFunc: (value: string) => void,
  ): Promise<PluginListenerHandle>;

  addListener(
      eventName: 'sendEventWithTimer',
      listenerFunc: (value: string) => void,
  ): Promise<PluginListenerHandle>;
}
