import {
  BaseComponent
} from "./chunk-7ZMCH2DW.js";
import {
  BaseStyle
} from "./chunk-B2FJEWHJ.js";
import "./chunk-HK24ITWL.js";
import {
  CommonModule
} from "./chunk-O3HM52OH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsetNgModuleScope
} from "./chunk-XOWQKNXR.js";
import "./chunk-66JPAEYR.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var theme = ({
  dt
}) => `
    .p-fluid{
        width:100%
    }
`;
var classes = {
  root: "p-fluid"
};
var FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes;
  theme = theme;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFluidStyle_BaseFactory;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (ɵFluidStyle_BaseFactory || (ɵFluidStyle_BaseFactory = ɵɵgetInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _FluidStyle,
    factory: _FluidStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var _c0 = ["*"];
var Fluid = class _Fluid extends BaseComponent {
  _componentStyle = inject(FluidStyle);
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFluid_BaseFactory;
    return function Fluid_Factory(__ngFactoryType__) {
      return (ɵFluid_BaseFactory || (ɵFluid_BaseFactory = ɵɵgetInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Fluid,
    selectors: [["p-fluid"]],
    hostVars: 2,
    hostBindings: function Fluid_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-fluid", true);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([FluidStyle]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Fluid_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [FluidStyle],
      host: {
        "[class.p-fluid]": "true"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Fluid, {
    className: "Fluid"
  });
})();
var FluidModule = class _FluidModule {
  static ɵfac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FluidModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FluidModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FluidModule, {
    imports: [Fluid],
    exports: [Fluid]
  });
})();
export {
  Fluid,
  FluidClasses,
  FluidModule,
  FluidStyle
};
//# sourceMappingURL=primeng_fluid.js.map