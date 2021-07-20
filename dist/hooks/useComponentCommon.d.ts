import { CommonComponentProps } from './../defaultProps';
declare const useComponentCommon: (props: Readonly<Partial<CommonComponentProps>>, picks: Array<string>) => {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<CommonComponentProps>>>>;
    handleClick: () => void;
};
export default useComponentCommon;
