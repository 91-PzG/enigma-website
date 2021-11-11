import { Compiler, Injectable, Injector, Type } from "@angular/core";
import { NgModuleFactory } from "@angular/core/src/r3_symbols";
import { NbDialogRef, NbDialogService } from "@nebular/theme";
import { UserDetailComponent } from "./user-detail-component/user-detail.component";
import { UserDetailModule } from "./user-detail.module";

@Injectable()
export class UserDetailService {
  loaded = false;
  userDetailComponent?: Type<any>;
  dialogRef: NbDialogRef<any>;

  constructor(
    private dialogService: NbDialogService,
    private compiler: Compiler,
    private injector: Injector
  ) {}

  openDialog() {
    if (!this.loaded) this.loadUserDetailModule();
    const dialogRef = this.dialogService.open(UserDetailComponent, {
      closeOnBackdropClick: true,
      closeOnEsc: true,
    });
  }

  /**
   * Loads the UserDetail model JIT
   * The Service itself is registered in the pages module
   */
  loadUserDetailModule() {
    import("./user-detail.module")
      .then((module) => module.UserDetailModule)
      .then((module) => {
        this.userDetailComponent = module.components.userDetail;
        return module;
      })
      .then((module) => this.compiler.compileModuleAsync(module))
      .then((factory: NgModuleFactory<UserDetailModule>) => {
        factory.create(this.injector);
        this.loaded = true;
      });
  }
}
