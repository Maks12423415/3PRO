// Importujemy React i hooki useState
"use client"

import React, { useState } from 'react'

// Definiujemy komponent Page4, który będzie eksportowany domyślnie
export default function Page4() {
    // Ustawiamy stan dla input (wartości wpisywanej przez użytkownika) i items (lista dodanych elementów)
    const [input, setInput] = useState('item')  // Domyślna wartość input to 'item'
    const [items, setItems] = useState([])  // Domyślna lista elementów to pusta tablica

    // Funkcja obsługująca dodawanie nowego elementu do listy
    const handleChaneg = () => {
        // Dodajemy aktualny stan input do listy items i resetujemy input
        setItems([...items, input])
        setInput('')  // Po dodaniu elementu, resetujemy pole input na pusty string
    }

    return (
        <div>
            {/* Pole tekstowe do wprowadzania nowych elementów */}
            <input 
                className='text-red-500' 
                type='text' 
                value={input}  // Przypisujemy wartość input do pola tekstowego
                onChange={(e) => setInput(e.target.value)}  // Zmieniamy wartość input na podstawie wpisu użytkownika
            />

            {/* Przycisk do dodawania elementów */}
            <button onClick={handleChaneg}>Dodaj</button>

            {/* Wyświetlanie listy elementów */}
            <ul>
                {
                    // Iterujemy po liście items i wyświetlamy każdy element w osobnym <li>
                    items.map((item, index) => (
                        <li key={index}>{item}</li>  // Każdy element musi mieć unikalny klucz (używamy indeksu)
                    ))
                }
            </ul>
        </div>
    )
}
