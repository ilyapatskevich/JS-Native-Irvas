import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowsWidth = document.querySelectorAll('#width'),
        windowsHeight = document.querySelectorAll('#height'),
        windowsType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;

                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;

                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowsHeight, 'height');
    bindActionToElems('input', windowsWidth, 'width');
    bindActionToElems('change', windowsType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;