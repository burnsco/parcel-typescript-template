import React from 'react';

/**
 * Properties for the BusySpinner component
 *
 * @interface Props
 */
interface Props {
  /** Children to be displayed if the component is not busy */
  children: React.ReactNode;
  /** Determines if the component is considered busy */
  isBusy?: boolean;
  /** Event handler for the onClick event */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * Displays a busy spinner instead of the content if the component is busy.
 *
 * @param {Props} props the component properties
 * @param {React.ReactNode} props.children to be displayed if the component is not busy
 * @param {boolean} [props.isBusy] false, determines if the component is busy
 * @returns {React.ReactNode} the component output.
 */
const BusySpinner: React.SFC<Props> =
  ({ children, isBusy = false, onClick }: Props) => {
    if (isBusy) {
      return (<span data-id="spinner" onClick={onClick}>I&apos;m busy</span>);
    }

    return (<>{children}</>);
  };

export default BusySpinner;
