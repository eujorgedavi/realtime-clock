import {ReactNode} from "react";

type Props = {
    infoDate: string,
    children: ReactNode;
}

export default function({ infoDate, children }: Props) {
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">Realtime Clock (UTC)</h1>
                <h2 className="text-2xl font-semitbold flex justify-center text-gray-900">
                    {infoDate}
                </h2>
            </div>
            {children}
        </div>
    )
}