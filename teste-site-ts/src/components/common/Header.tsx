export default function Header() {
  return (
    <div className=" flex rounded-md lg:border-y-4 border-border-color border-opacity-20 lg:border-solid  lg:w-[100%] lg:h-[7%] justify-center mx-auto bg-border-color bg-opacity-30 p-[10%] lg:py-6">
      <button className="lg:border-8 border-menu-button-color lg:border-solid lg:rounded-full lg:h-auto font-body lg:w-[10%] text-text-button-color bg-menu-button-color lg:font-medium lg:text-4xl lg:mx-auto text-center">
        Game
      </button>
      <button className="lg:border-8 border-menu-button-color lg:border-solid lg:rounded-full lg:h-auto font-body lg:w-[10%] text-text-button-color bg-menu-button-color lg:font-medium lg:text-4xl lg:mx-auto text-center">
        Characters
      </button>
      <button className="lg:border-8 border-menu-button-color lg:border-solid lg:rounded-full lg:h-auto font-body lg:w-[10%] text-text-button-color bg-menu-button-color lg:font-medium lg:text-4xl lg:mx-auto text-center">
        Collections
      </button>
    </div>
  );
}
