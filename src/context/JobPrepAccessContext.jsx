import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const STORAGE_KEY = 'jobPrepUnlocked_v1'
const JobPrepAccessContext = createContext(null)

export function JobPrepAccessProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })
  const [modalOpen, setModalOpen] = useState(false)

  const requestUnlock = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const grantAccess = useCallback((meta = {}) => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
      localStorage.setItem(
        `${STORAGE_KEY}_meta`,
        JSON.stringify({ ...meta, at: new Date().toISOString() })
      )
    } catch {
      /* ignore */
    }
    setUnlocked(true)
    setModalOpen(false)
  }, [])

  const value = useMemo(
    () => ({ unlocked, modalOpen, requestUnlock, closeModal, grantAccess }),
    [unlocked, modalOpen, requestUnlock, closeModal, grantAccess]
  )

  return <JobPrepAccessContext.Provider value={value}>{children}</JobPrepAccessContext.Provider>
}

export function useJobPrepAccess() {
  const ctx = useContext(JobPrepAccessContext)
  if (!ctx) throw new Error('useJobPrepAccess must be used within JobPrepAccessProvider')
  return ctx
}
