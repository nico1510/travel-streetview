import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ImageItemComponent from './ImageItemComponent';
import ImageUploadComponent from './ImageUploadComponent';
import {StyleSheet, css} from 'aphrodite/no-important';

function ImagePanelComponent(props) {
    let key = 0;
    return (
        <div id="image-panel" className={css(styles.imagePanel)}>
            <ImageUploadComponent handleFileUpload={props.handleFileUpload} />
            {props.list.map((item) => {
                return (
                    <ImageItemComponent handleItemSelect={props.handleItemSelect}
                                        isSelected={item === props.selectedItem}
                                        item={item}
                                        key={key++}/>
                )
            })}
        </div>
    );
}

const styles = StyleSheet.create({
    imagePanel: {
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%',
        height: '100%',
        overflow: 'scroll',
        justifyContent: 'start',
        alignItems: 'start',
        backgroundColor: darkBaseTheme.palette.canvasColor
    }
});


export default ImagePanelComponent;