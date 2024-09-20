"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface IData {
    name: string;
    id: string;
}

const Use = () => {
    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setCharacters(data.results);
        }
        load();
    }, [])

    return (
        <>
            {characters.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <Link href={`/perso/${item.id}`}>ME CLIQUE</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Use;