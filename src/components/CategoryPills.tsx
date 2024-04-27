import { Button } from "./Button";

type CategoryPillProps={
    categories: string[];
}

export default function CategoryPills({categories}: CategoryPillProps) {
    return (
        <>
            <div className="overflow-x-hidden relative ml-3 mb-3">
                <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                    {categories.map(category=>(                        
                    <Button variant="dark" className="py-1 px-3 rounded-lg whitespace-nowrap">{category}</Button>
                    ))}
                </div>
            </div>
        </>)
}