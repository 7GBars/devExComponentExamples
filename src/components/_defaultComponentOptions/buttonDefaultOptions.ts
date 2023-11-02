import dxButton from "devextreme/ui/button";

export const setButtonDefaultOptions = () => {
  dxButton.defaultOptions({
    device: {deviceType: "phone"},
    options: { onInitialized: (e) => {
      e.component?.option('disabled', false);
    }}
  })
}