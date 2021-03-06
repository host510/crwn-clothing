import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './directory.styles.scss';
import MenuItem from '../menu-item.component';
import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);