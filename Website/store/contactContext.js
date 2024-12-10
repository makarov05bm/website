import { createContext, useState, useEffect } from "react"

const BlogContext = createContext({
    notification: null,
    active: false,
    showNotification: function() {},
    hideNotification: function() {},
    toggleContact: function() {},
    filterType: 'all',
    toggleFilterType: function() {},
})

export function BlogContextProvider({ children }) {
    
    const [active, setActive] = useState(false)

    const toggleContact = () => {
        setActive(!active)
    }

    const [notification, setNotification] = useState(null)

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [notification])

    const showNotification = (data) => {
        setNotification({
            title: data.title,
            body: data.body,
            status: data.status,
        })
    }

    const hideNotification = (data) => {
        setNotification(null)
    }

    const [filterType, setFilterType] = useState('all')

    const toggleFilterType = (type) => {
        setFilterType(type)
    }
    
    const context = {
        active,
        toggleContact,
        notification,
        showNotification,
        hideNotification,
        filterType,
        toggleFilterType,
    }

    return (
        <BlogContext.Provider value={context}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext