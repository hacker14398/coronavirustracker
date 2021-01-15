import React, { useEffect, useState } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import { fetchCountry } from "../../api";

export default function CountryPicker() {
    const [fetchedCountry, setfetchedCountry] = useState([]);
    useEffect(() => {
        const fetchedCountries = async () => {
            setfetchedCountry(await fetchCountry());
        }

        fetchedCountries();
    }, [setfetchedCountry]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountry.map((country, i) => <option key={i} value="country">{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
