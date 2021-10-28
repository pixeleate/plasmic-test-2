// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nHQN8AdET8S4rVFrZniYBR
// Component: Y-isqAA3q8Mq
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
import Navigation from "../../Navigation"; // plasmic-import: P2Dx7wzlUWNw/component
import Button from "../../Button"; // plasmic-import: y-5CxXDvX1fj/component
import Divider from "../../Divider"; // plasmic-import: Ubqi7dPnLJ4f/component
import Textinput from "../../Textinput"; // plasmic-import: zoafs7e55VIm/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gFVYvONYSyvG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: nHQN8AdET8S4rVFrZniYBR/projectcss
import * as sty from "./PlasmicHeroSection2.module.css"; // plasmic-import: Y-isqAA3q8Mq/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9RBPku-iyJIH/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 2faBcOoONdgV/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: 0jWwIcOBaZAS/icon

export type PlasmicHeroSection2__VariantMembers = {};

export type PlasmicHeroSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection2__VariantsArgs;
export const PlasmicHeroSection2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection2__ArgsType = {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeroSection2__ArgsType;
export const PlasmicHeroSection2__ArgProps = new Array<ArgPropType>(
  "foreground",
  "children"
);

export type PlasmicHeroSection2__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  hero3?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  background3?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
};

export interface DefaultHeroSection2Props {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeroSection2__RenderFunc(props: {
  variants: PlasmicHeroSection2__VariantsArgs;
  args: PlasmicHeroSection2__ArgsType;
  overrides: PlasmicHeroSection2__OverridesType;
  dataFetches?: PlasmicHeroSection2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation__dl47R)}
              hideCta={"hideCta" as const}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rJIw)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"40px" as const}
                src={{
                  src: "/plasmic/landing_page_starter/images/image13.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, sty.hero3)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100%" as const}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" as const
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(defaultcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__zKv)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__y9GPg)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox___7WvSq
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__zTpPi
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___5CAQ
                      )}
                    >
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                      >
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"adapt"}
                        </span>
                      </span>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__yjZq
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox___06VKh)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__wHu0J
                      )}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__gv3Zz
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    />

                    <Button
                      bgDifference={"bgDifference" as const}
                      className={classNames(
                        "__wab_instance",
                        sty.button__y5Z90
                      )}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text___9RLfN
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      }
                    />
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__p5Agt)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__kbvnL)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__rbHwv)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__iSuHh
                        )}
                      >
                        {"Sign up with"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__mfr8B
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__xJBg
                          )}
                          ouline={"ouline" as const}
                          slot={"Apple"}
                          startIcon={"startIcon" as const}
                        />

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button___7B7Ej
                          )}
                          ouline={"ouline" as const}
                          slot={"Google"}
                          startIcon={"startIcon" as const}
                        >
                          <Icon6Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__j1Ot8
                            )}
                            role={"img"}
                          />
                        </Button>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox___3UVsz
                        )}
                      >
                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider___7Kfhk
                          )}
                        />

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__abcNp
                          )}
                        >
                          {"Or"}
                        </div>

                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__xgv0Z
                          )}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__tTjLc
                        )}
                      >
                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__eQwH
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__eBkVq
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__arEmc
                          )}
                        />
                      </p.Stack>

                      <Button
                        children2={
                          <Icon5Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__g1Vfe
                            )}
                            role={"img"}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.button__e1Eqn
                        )}
                        colors={"indigo" as const}
                        slot={"Start your account"}
                      />
                    </p.Stack>

                    <Divider
                      className={classNames(
                        "__wab_instance",
                        sty.divider__ppryb
                      )}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__idl6M)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__nEwtc
                        )}
                      >
                        {
                          "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
                        }
                      </div>
                    </div>
                  </div>
                </p.Stack>
              </React.Fragment>
            ),
            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "background3", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "background3", "foreground"],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  hero3: "div";
  img: typeof p.PlasmicImg;
  background3: "div";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection2__VariantsArgs;
    args?: PlasmicHeroSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeroSection2__Fetches;
  } & Omit<PlasmicHeroSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroSection2__ArgProps,
      internalVariantPropNames: PlasmicHeroSection2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeroSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection2";
  } else {
    func.displayName = `PlasmicHeroSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection2 = Object.assign(
  // Top-level PlasmicHeroSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicHeroSection2
    internalVariantProps: PlasmicHeroSection2__VariantProps,
    internalArgProps: PlasmicHeroSection2__ArgProps
  }
);

export default PlasmicHeroSection2;
/* prettier-ignore-end */