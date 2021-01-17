import React, { useEffect, useState } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import { fetchCountry } from "../../api";

export default function CountryPicker({ handleCountryChange }) {
    const [fetchedCountry, setfetchedCountry] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountry(await fetchCountry());
        }

        fetchAPI();
    }, [setfetchedCountry]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
