import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { OverleyModal, List, BtnOtherCategory, Item } from './Modal.styled';

function Modal({ categories, onClose, onSearchByCategory }) {
  const handleKeyDown = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClickOnCategory = category => {
    onSearchByCategory(category);
    onClose();
  };

  return (
    <OverleyModal>
      <List>
        {categories.map((category, idx) => {
          return (
            <Item key={idx}>
              <BtnOtherCategory
                type="button"
                onClick={() => {
                  handleClickOnCategory(category.section);
                }}
              >
                {category.display_name}
              </BtnOtherCategory>
            </Item>
          );
        })}
      </List>
    </OverleyModal>
  );
}

Modal.propTypes = {
  categories: PropTypes.array.isRequired,
  onSearchByCategory: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
