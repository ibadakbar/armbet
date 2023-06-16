import React from 'react';
import theme from "../../theme";
import Input from "../../components/Input";
import useForceUpdate from 'use-force-update';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import f from "../../resources/functions";
import i18n from '../../i18n';

var address = "";
var valid = -1;
var loading = false;
var suggestions = [];
var showDropdown = false;
var selectedAProposition = false;

const AddressInput = (props) => {

    const { getOnChanged, getOnSelect } = props;
    const update = useForceUpdate();
    var setVal = () => {};

    const onAddressChange = (theAddress) => {
        address = theAddress;
        showDropdown = true;
        loading = true;
        valid = -1;
        selectedAProposition = false;
        update();
        if(getOnChanged) getOnChanged({val:theAddress,name:"address",isValid:-1});
        f.searchTimer(theAddress,async(searchResults)=>{
            loading = false;
            if (searchResults) {
                suggestions = searchResults.addresses;
                update();
            }
        },true,{searchText:theAddress.trim(),selectedSearchType:1,lang:i18n.language});
    };

    const onAddressSelect = theAddress => {
        address = theAddress;
        selectedAProposition = true;
        valid = 1;
        loading = false;
        setVal(theAddress);
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            if(getOnSelect) getOnSelect({val:theAddress,name:"address",isValid:1,coordinates:latLng});
            showDropdown = false;
            update();
        })
        .catch(error => console.error('Error', error));
        update();
    };

    const onBlur = val => {
        if (!selectedAProposition) {
            if(getOnChanged) getOnChanged({val:val,name:"address",isValid:0});
            valid = 0;
            update();
        }
    }

    return (
        <div style={{ position:"relative" }}>
            <Input {...props} onChange={onAddressChange} onBlur={onBlur} valid={valid} getSetValue={(setValue) => {setVal = setValue}} textTransform="capitalize" required minWidth="190px" vPadding={theme.spacers[2]} />
            <div style={{ position:"absolute", marginTop: "-10px", zIndex: theme.zIndex.middle2, backgroundColor: "white", minWidth: "281px", maxWidth: "450px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 16px", display: showDropdown ? "block" : "none" }}>
                {loading && <img style={{ cursor: 'pointer', margin: 10, marginBottom: 5, lineHeight: "18px", height: 25 }} alt="Loader" src={require("../../assets/images/inline_loader.gif")} />}
                {suggestions.map((suggestion,index) => {
                    const style = { cursor: 'pointer', margin: 10, lineHeight: "18px", backgroundColor: "transparent", display: "block", textAlign:'left'};
                    return (
                    <button
                        key={index}
                        style={style}
                        onClick={() => {onAddressSelect(suggestion)}}
                    >
                        {suggestion}
                    </button>
                    );
                })}
            </div>
        </div>
    );
};


export default AddressInput;