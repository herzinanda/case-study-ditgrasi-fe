import React, { useState } from 'react';

const AccordionFilter = () => {
    const [isFacultyOpen, setIsFacultyOpen] = useState(false);
    const [isStrataOpen, setIsStrataOpen] = useState(false);

    return (
        <div className="p-4 rounded-lg bg-[#F8F8F8]">
            <h2 className="text-base font-semibold text-green-800 mb-4">Filter</h2>

            {/* Fakultas Section */ }
            <div>
                <button
                    onClick={ () => setIsFacultyOpen(!isFacultyOpen) }
                    className="flex justify-between w-full py-2 text-left text-sm font-semibold hover:text-green-800 focus:outline-none"
                >
                    <span>Fakultas</span>
                    <span>{ isFacultyOpen ? '▲' : '▼' }</span>
                </button>
                { isFacultyOpen && (
                    <div className="mt-2 space-y-2">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Fakultas Kedokteran</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Fakultas Hukum</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Fakultas Pertanian</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Fakultas Teknik</span>
                            </label>
                        </div>
                        {/* Add more options here */ }
                    </div>
                ) }
            </div>

            {/* Strata Section */ }
            <div className="mt-6">
                <button
                    onClick={ () => setIsStrataOpen(!isStrataOpen) }
                    className="flex justify-between w-full py-2 text-left text-sm font-medium text-gray-900 hover:text-green-800 focus:outline-none"
                >
                    <span>Strata</span>
                    <span>{ isStrataOpen ? '▲' : '▼' }</span>
                </button>
                { isStrataOpen && (
                    <div className="mt-2 space-y-2">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Diploma</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Sarjana</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Master</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Doktoral</span>
                            </label>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default AccordionFilter;
