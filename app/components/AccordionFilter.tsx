import React, { useState } from 'react';
import { facultyItems, degreeItems } from '../data/accreditationData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionFilterProps {
    selectedFaculties: string[];
    setSelectedFaculties: React.Dispatch<React.SetStateAction<string[]>>;
    selectedDegrees: string[];
    setSelectedDegrees: React.Dispatch<React.SetStateAction<string[]>>;
}

const AccordionFilter: React.FC<AccordionFilterProps> = ({
    selectedFaculties,
    setSelectedFaculties,
    selectedDegrees,
    setSelectedDegrees
}) => {
    const [isFacultyOpen, setIsFacultyOpen] = useState(false);
    const [isDegreeOpen, setIsDegreeOpen] = useState(false);

    const handleFacultyChange = (value: string) => {
        setSelectedFaculties(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleDegreeChange = (value: string) => {
        setSelectedDegrees(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="p-4 rounded-lg bg-[#F8F8F8]">
            <h2 className="text-base font-semibold text-green-800 mb-4">Filter</h2>

            {/* Faculty Filter */ }
            <div className="mb-4">
                <button
                    onClick={ () => setIsFacultyOpen(!isFacultyOpen) }
                    className="flex justify-between w-full py-2 text-left text-sm font-semibold hover:text-green-800 focus:outline-none"
                >
                    <span>Fakultas</span>
                    <span>{ isFacultyOpen ? <ChevronUp /> : <ChevronDown /> }</span>
                </button>
                { isFacultyOpen && (
                    <div className="mt-2 space-y-2">
                        { facultyItems.map((faculty, index) => (
                            <div key={ index }>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox appearance-none w-4 h-4 border-2 border-[#D9D9D9] rounded-sm checked:bg-usu-light-green"
                                        value={ faculty.value }
                                        onChange={ () => handleFacultyChange(faculty.label) }
                                        checked={ selectedFaculties.includes(faculty.label) }
                                        aria-label={ faculty.label }
                                    />
                                    <span className="ml-2 flex">{ faculty.label }</span>
                                </label>
                            </div>
                        )) }
                    </div>
                ) }
            </div>

            {/* Degree Filter */ }
            <div>
                <button
                    onClick={ () => setIsDegreeOpen(!isDegreeOpen) }
                    className="flex justify-between w-full py-2 text-left text-sm font-semibold hover:text-green-800 focus:outline-none"
                >
                    <span>Jenjang</span>
                    <span>{ isDegreeOpen ? <ChevronUp /> : <ChevronDown /> }</span>
                </button>
                { isDegreeOpen && (
                    <div className="mt-2 space-y-2">
                        { degreeItems.map((degree, index) => (
                            <div key={ index }>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox appearance-none w-4 h-4 border-2 border-[#D9D9D9] rounded-sm checked:bg-usu-light-green"
                                        value={ degree.value }
                                        onChange={ () => handleDegreeChange(degree.label) }
                                        checked={ selectedDegrees.includes(degree.label) }
                                        aria-label={ degree.label }
                                    />
                                    <span className="ml-2">{ degree.label }</span>
                                </label>
                            </div>
                        )) }
                    </div>
                ) }
            </div>
        </div>
    );
};

export default AccordionFilter;