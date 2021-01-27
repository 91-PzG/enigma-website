import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { EventsRoutingModule, routedComponents } from './events-routing.module';

@NgModule({
  imports: [ThemeModule, EventsRoutingModule],
  declarations: [...routedComponents],
})
export class EventsModule {}
