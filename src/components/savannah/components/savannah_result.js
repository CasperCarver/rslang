import { getSavannahStartControls } from './savannah_start';

export const getSavannahResult = ({ correct, wrong }) => `
<div class="savannah__start" id="js-start_block">
  <span class="savannah__start_title">savannah</span>
  <span class="savannah__start_stat">You need to learn: ${wrong}. You know: ${correct}.</span>
  <div class="savannah__close_btn"></div>
  ${getSavannahStartControls()}
  <div class="savannah__start_paginator id="js-savannah__start_paginator">
    <div class="savannah__start_page savannah__start_page_select" id="js-savannah_start_page_result"></div>
    <div class="savannah__start_page" id="js-savannah_start_page_statistics"></div>
    <div class="savannah__start_page"></div>
  </div>
    <div class="savannah__start_final" id="js-savannah_start_final">
      <div class="savannah__start_final_answears">
        <div class="savannah__start_final_wrong">
          <div class="savannah__start_final_wrong_title">
            <span>Errors:</span> ${wrong}
          </div>
        </div>
        <div class="savannah__start_final_valid">
          <div class="savannah__start_final_valid_title">
            <span>Correct:</span> ${correct}
          <div>
        </div>
      </div>
    </div>
  </div>
  `;
