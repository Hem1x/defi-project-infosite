import {useState, useEffect} from 'react'

export default function useChangeDropdown(initialValue, dropdownNumber, location) {
    const [value, setValue] = useState(initialValue)
    const url = location.pathname.slice(1)

    const dropdown = [
        {
            "about": "О проекте",
            "team": "Команда",
            "roadmap": "Roadmap",
        },

        {
            "community": "Сообщество",
            "partners": "Инвесторы",
            "vacancies": "Вакансии",
        }
    ]

    useEffect(() => {
        setValue(dropdown[dropdownNumber][url] ? dropdown[dropdownNumber][url] : initialValue)
    }, [location])


    return value
}