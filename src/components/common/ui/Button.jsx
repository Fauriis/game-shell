const skins = {
  primary:
    "bg-blue-500 inline-block text-center h-full py-2 px-4 text-white rounded hover:bg-blue-700",
  primaryInverted:
    "border border-blue-500 text-blue-500 h-full inline-block text-center py-2 px-4 text-white rounded hover:bg-blue-700 hover:text-white",
    danger:
    "bg-red-500 h-full inline-block text-center py-2 px-4 text-white rounded hover:bg-blue-700 hover:text-white",

};

export const Button = ({
  element = "button",
  skin = "primary",
  className ='',
  children,
  ...props
}) => {
  const Element = element;

  return (
    <Element {...props} className={`${skins[skin]} ${className}`}>
      {children}
    </Element>
  );
};
