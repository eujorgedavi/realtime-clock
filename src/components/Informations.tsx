import {WorldClock} from "../utils/Interfaces";

type Props = {
    worldClock: WorldClock,
}

export default function({ worldClock }: Props) {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">General Informations</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5">
                <dl className="grid gap-y-8 grid-cols-2">
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">ID</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.$id }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">File Time</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.currentFileTime }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Date Time</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.currentDateTime }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Ordinal Date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.ordinalDate }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">UTC</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.utcOffset }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Time Zone</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.timeZoneName }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Day Light Savings Time</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.isDayLightSavingsTime ? "Yes": "No" }</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Service Response</dt>
                        <dd className="mt-1 text-sm text-gray-900">{ worldClock.serviceResponse == null ? "None" : worldClock.serviceResponse }</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}