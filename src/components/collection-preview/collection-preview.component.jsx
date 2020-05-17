import React from 'react';
import CollectionItem  from '../../components/collection-item/collection-item.component';
import "./collection-preview.component.scss";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;