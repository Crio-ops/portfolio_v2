import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { components } from "react-select";
import './LanguageSelectorStyle.css'
import Fr_flag from "../../assets/img/fr_flag.png";
import En_flag from "../../assets/img/en_flag.png";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.value);
  };

  const { SingleValue, Option } = components;

  const IconSingleValue = (props) => (
    <SingleValue {...props}>
      <img
        src={props.data.icon}
        alt="flag"
        style={{
          height: "1.5em",
          width: "1.5em",
        }}
      />
    </SingleValue>
  );

  const IconOption = (props) => (
    <Option {...props}>
      <img
        src={props.data.icon}
        alt="flag"
        style={{
            height: "1.5em",
            width: "1.5em",
        }}
      />
    </Option>
  );

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: 'transparent',
      borderColor: 'transparent',
      minHeight: '30px',
      height: '30px',
      margin: '0',
      boxShadow: state.isFocused ? null : null,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      padding: '0'
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menu: (provided, state) => ({
      ...provided,
      top: '100%',
      position: 'absolute',
      width: '150%',
      zIndex: 1,
      backgroundColor:' hsl(0, 0%, 100%)',
      borderRadius: '4px',
      marginBottom: '8px',
      marginTop: '8px',
      boxSizing: 'border-box',
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      padding:'5px 8px 5px 10px'
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }),
  };

  const options = [
    { value: "en", label: "English", icon: En_flag },
    { value: "fr", label: "Français", icon: Fr_flag },
  ];

  return (
    <div className="language-selector">
      <Select
       classNames={{
        control: (state) =>
          state.isFocused ? 'border-red-600' : 'border-grey-300',
  
      }}
        styles={customStyles}
        onChange={changeLanguage}
        defaultValue={options.find((option) => option.value === i18n.language)}
        components={{ SingleValue: IconSingleValue, Option: IconOption }}
        options={options}
      />
    </div>
  );
}

export default LanguageSelector;
