export interface webeventPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
