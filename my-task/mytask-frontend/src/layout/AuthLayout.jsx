const AuthLayout = ({ children }) => {
   return (
      <div  className="flex items-center justify-center bg-gray-100 h-screen">
         <main className="bg-white w-[890px] rounded-md shadow-md">{children}</main>
      </div>
   );
};
export default AuthLayout;
