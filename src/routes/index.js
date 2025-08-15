// File: src/routes/index.js (Phiên bản TỐI GIẢN)

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Chỉ import duy nhất SignInPage
import SignInPage from "../pages/SignIn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Mọi đường dẫn đều sẽ hiển thị trang Đăng nhập */}
        <Route path="*" element={<SignInPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;