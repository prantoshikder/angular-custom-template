import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const DesignComponentModule = [
  NzButtonModule,
  NzDropDownModule,
  NzPaginationModule,
  NzFormModule,
  NzCheckboxModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule,
  NzImageModule,
  FormsModule,
  ReactiveFormsModule,
  NzIconModule,
  NzTabsModule,
  NzPopoverModule,
  NzAvatarModule,
  NzFormModule,
  NzSelectModule,
  NzSpinModule,
  NzTypographyModule,
  NzSpaceModule,
  NzCardModule,
  NzTableModule,
  NzNotificationServiceModule,
  NzUploadModule,
  NzBadgeModule,
  NzAlertModule,
  NzListModule,
  NzDatePickerModule,
  NzToolTipModule,
  NzModalModule,
  NzDividerModule,
  NzInputNumberModule,
  NzSwitchModule,
  NzTreeSelectModule,
  NzTreeViewModule,
  NzCollapseModule,
  ScrollingModule,
  NzSkeletonModule,
  NzCommentModule,
];

@NgModule({
  exports: [DesignComponentModule],
})
export class DesignComponentsModule {
  static forRoot() {
    return {
      ngModule: DesignComponentsModule,
      providers: [],
    };
  }
}
