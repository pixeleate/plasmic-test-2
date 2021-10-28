// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nHQN8AdET8S4rVFrZniYBR
// Component: v55cLc_IEhuj
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: y-5CxXDvX1fj/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: nHQN8AdET8S4rVFrZniYBR/projectcss
import * as sty from "./PlasmicBanner.module.css"; // plasmic-import: v55cLc_IEhuj/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9RBPku-iyJIH/icon

export type PlasmicBanner__VariantMembers = {};

export type PlasmicBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicBanner__VariantsArgs;
export const PlasmicBanner__VariantProps = new Array<VariantPropType>();

export type PlasmicBanner__ArgsType = {
  children?: React.ReactNode;
  left?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBanner__ArgsType;
export const PlasmicBanner__ArgProps = new Array<ArgPropType>(
  "children",
  "left"
);

export type PlasmicBanner__OverridesType = {
  root?: p.Flex<"div">;
  right?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  left?: p.Flex<"div">;
};

export interface DefaultBannerProps {
  children?: React.ReactNode;
  left?: React.ReactNode;
  className?: string;
}

function PlasmicBanner__RenderFunc(props: {
  variants: PlasmicBanner__VariantsArgs;
  args: PlasmicBanner__ArgsType;
  overrides: PlasmicBanner__OverridesType;
  dataFetches?: PlasmicBanner__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(defaultcss.all, sty.right)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__iZlon)}
              displayHeight={"100%" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              src={
                "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80" as const
              }
            />
          ),

          value: args.children
        })}

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(defaultcss.all, sty.freeBox)}
        />
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        hasGap={true}
        className={classNames(defaultcss.all, sty.left)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__io9Ji
                )}
              >
                {"Sunglasses Collection"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__cjwuK
                )}
              >
                {"Get 25% off on selected items"}
              </div>

              <Button
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__mamfF
                    )}
                  >
                    {"Go to collection ->"}
                  </div>
                }
              />
            </React.Fragment>
          ),
          value: args.left
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "right", "freeBox", "left"],
  right: ["right", "freeBox"],
  freeBox: ["freeBox"],
  left: ["left"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  right: "div";
  freeBox: "div";
  left: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBanner__VariantsArgs;
    args?: PlasmicBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBanner__Fetches;
  } & Omit<PlasmicBanner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBanner__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBanner__ArgProps,
      internalVariantPropNames: PlasmicBanner__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner";
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    right: makeNodeComponent("right"),
    freeBox: makeNodeComponent("freeBox"),
    left: makeNodeComponent("left"),

    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps
  }
);

export default PlasmicBanner;
/* prettier-ignore-end */
