import React, { useState, useEffect } from 'react';
import ProgramStudiTable from './ProgramStudiTable';
import AccordionFilter from './AccordionFilter';
import SearchBar from './searchbar';

interface StudyProgram {
    id: number;
    programStudi: string;
    faculty: string;
    jenjang: string;
    akreditasi: string;
    suratKeputusan: string;
}

const AccreditationContainer: React.FC = () => {
    const [studyPrograms, setStudyPrograms] = useState<StudyProgram[]>([]);
    const [filteredPrograms, setFilteredPrograms] = useState<StudyProgram[]>([]);
    const [selectedFaculties, setSelectedFaculties] = useState<string[]>([]);
    const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        // Fetch data from your API
        fetch('http://127.0.0.1:8000/api/accreditations')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.data.map((item: any) => ({
                    id: item.id,
                    programStudi: item.study_program,
                    faculty: item.faculty,
                    jenjang: item.degree,
                    akreditasi: item.accreditation,
                    suratKeputusan: item.decree,
                }));
                setStudyPrograms(formattedData);
                setFilteredPrograms(formattedData);
            });
    }, []);

    useEffect(() => {
        const filteredResults = studyPrograms.filter(program => {
            const facultyMatch = selectedFaculties.length === 0 || selectedFaculties.includes(program.faculty);
            const degreeMatch = selectedDegrees.length === 0 || selectedDegrees.includes(program.jenjang);
            const searchMatch = program.programStudi.toLowerCase().includes(searchTerm.toLowerCase());
            return facultyMatch && degreeMatch && searchMatch;
        });
        setFilteredPrograms(filteredResults);
    }, [selectedFaculties, selectedDegrees, searchTerm, studyPrograms]);

    return (
        <>
            <SearchBar onSearch={ setSearchTerm } />
            <div className="grid grid-cols-12 gap-4 py-4">
                <div className="order-last md:order-first col-span-full md:col-span-9">
                    <ProgramStudiTable data={ filteredPrograms } />
                </div>
                <div className="col-span-full md:col-span-3">
                    <AccordionFilter
                        selectedFaculties={ selectedFaculties }
                        setSelectedFaculties={ setSelectedFaculties }
                        selectedDegrees={ selectedDegrees }
                        setSelectedDegrees={ setSelectedDegrees }
                    />
                </div>
            </div>
        </>
    );
};

export default AccreditationContainer;
