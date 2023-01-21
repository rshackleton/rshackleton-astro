import type { ComponentMapModule } from './types';

declare module 'virtual:component-map' {
  const COMPONENT_MAP: ComponentMapModule;
  export default COMPONENT_MAP;
}
