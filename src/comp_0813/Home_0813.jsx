import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Comp_effect from './comp.effect/Comp_effect.jsx';
import Comp_memo   from './comp_memo/Comp_memo.jsx';
import Layout from './Layout_0813';

export default function Home_0813() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
+         {/* ✅ 기본 진입(/Home_0813)일 때는 안내만 보여주고, Memo/Effect는 클릭해야 보이게 */}
+         <Route index element={<div style={{padding:'8px 0'}}>메뉴에서 Memo 또는 Effect를 선택하세요.</div>} />

          <Route path="Comp_memo"   element={<Comp_memo />} />
          <Route path="Comp_effect" element={<Comp_effect />} />
        </Route>
      </Routes>
    </div>
  );
}