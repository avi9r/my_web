import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const TrackPage = lazy(() => import('./pages/TrackPage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const DsaRoutes = lazy(() => import('./learn/dsa/DsaRoutes'))

function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-sm text-slate-500">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="learn/dsa/*" element={<DsaRoutes />} />
            <Route path="learn/:trackId" element={<TrackPage />} />
            <Route path="learn/:trackId/:lessonId" element={<LessonPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
