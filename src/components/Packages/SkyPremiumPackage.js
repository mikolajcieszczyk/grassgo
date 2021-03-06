import React, { Component } from "react";
import SkyImage from "assets/images/svg/exported/bird-image.svg";
import { GreenButton, OrangeButton } from "../Buttons";
import PremiumPackageForm from "../Form/PremiumPackageForm";

export default class SkyPremiumPackage extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      form: false,
    };

    this.hideShowContent = this.hideShowContent.bind(this);
    this.hideShowForm = this.hideShowForm.bind(this);
  }

  hideShowContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  hideShowForm() {
    this.setState({
      form: !this.state.form,
    });
  }

  render() {
    return (
      <>
        <section className="sky-premium-package d-flex flex-column align-content-center justify-content-center py-5">
          <div className="row d-flex flex-column flex-lg-row justify-items-center">
            <div className="col-12 col-lg-6 text-center">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 650 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Ilustracje_4_Sky_grouped 1">
                  <g id="Group">
                    <g id="Group_2">
                      <g id="all">
                        <path
                          id="Vector"
                          d="M329.6 552.4C462.59 552.4 570.4 444.59 570.4 311.6C570.4 178.61 462.59 70.8 329.6 70.8C196.61 70.8 88.8 178.61 88.8 311.6C88.8 444.59 196.61 552.4 329.6 552.4Z"
                          fill="#FFD1B8"
                        />
                        <path
                          id="Vector_2"
                          d="M401.1 315.5C418.276 315.5 432.2 301.576 432.2 284.4C432.2 267.224 418.276 253.3 401.1 253.3C383.924 253.3 370 267.224 370 284.4C370 301.576 383.924 315.5 401.1 315.5Z"
                          fill="#FF8764"
                        />
                        <g id="Group_3">
                          <path
                            id="Vector_3"
                            d="M406.4 459.1C404.5 469.2 403.3 485.2 410.3 501.8C411.4 504.5 412.7 507.1 414.2 509.6"
                            stroke="#472300"
                            stroke-width="2.74"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Vector_4"
                            d="M405 470.7C405 470.7 381.7 494 389.5 521.2"
                            stroke="#472300"
                            stroke-width="2.74"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <g id="Group_4">
                            <path
                              id="Vector_5"
                              d="M457.4 515.4C472.8 530.9 467.9 560.8 467.9 560.8C467.9 560.8 437.9 565.8 422.5 550.3C407.1 534.8 412 504.9 412 504.9C412 504.9 442 500 457.4 515.4Z"
                              fill="#2E5257"
                            />
                            <path
                              id="Vector_6"
                              d="M422.5 550.4C437.9 565.8 467.9 560.9 467.9 560.9L412 505C412 505 407 534.9 422.5 550.4Z"
                              fill="#0F373C"
                            />
                          </g>
                        </g>
                        <g id="Group_5">
                          <g id="Group_6">
                            <path
                              id="Vector_7"
                              d="M193.1 153.1C204.201 153.1 213.2 144.101 213.2 133C213.2 121.899 204.201 112.9 193.1 112.9C181.999 112.9 173 121.899 173 133C173 144.101 181.999 153.1 193.1 153.1Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_8"
                              d="M245.6 167.7C237.8 145.6 216.9 130.9 193.5 130.9C193.5 110.6 177 94.1 156.7 94.1C136.4 94.1 119.9 110.6 119.9 130.9V131.1C118.5 130.9 116.9 130.9 115.4 130.9C84.9 130.9 60.2 155.6 60.2 186.1C60.2 216.6 84.9 241.3 115.4 241.3C130.1 241.3 144.2 235.5 154.5 225.1C172.3 243 199.9 246.5 221.6 233.6C237.7 246 260.8 243.1 273.2 227C285.6 210.9 282.7 187.8 266.6 175.4C260.6 170.7 253.2 168 245.6 167.7Z"
                              fill="#FAEBDC"
                            />
                            <path
                              id="Vector_9"
                              d="M108.6 152.1C105.4 154.7 102.5 157.6 99.9 160.8C102.3 157.5 105.3 154.5 108.6 152.1Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_10"
                              d="M156.7 115.9C162.9 108.7 171.7 104.2 181.2 103.4C166.9 90.6 145.1 91 131.2 104.3L131.1 104.4C130.7 104.8 130.3 105.2 130 105.6C129.6 106 129.2 106.4 128.8 106.9L128.7 107C128.3 107.4 128 107.9 127.6 108.4C126.5 109.7 125.6 111.2 124.8 112.6C124.1 113.8 123.5 115 123 116.2C122.8 116.8 122.5 117.3 122.3 117.9C121.9 119.1 121.5 120.2 121.2 121.4C121.1 121.8 121 122.2 120.9 122.6C120.7 123.4 120.5 124.2 120.4 125C120.3 125.3 120.3 125.7 120.2 126C120.2 126.3 120.1 126.6 120.1 127C120 128.3 119.9 129.5 119.9 130.8C119.9 130.9 119.9 130.9 119.9 131C118.4 130.9 116.8 130.8 115.3 130.8C84.8 130.9 60.2 155.7 60.3 186.2C60.4 215.3 83.2 239.4 112.2 241.1C86.9 224.2 80 189.9 96.9 164.6C97.8 163.3 98.7 162 99.7 160.8C102.1 157.4 105 154.5 108.4 152.1C125.9 139.4 150.3 143.3 163 160.8C165.4 164.1 167.3 167.9 168.6 171.8C169.7 176 170.4 180.4 170.4 184.7C170.4 185.1 170.4 185.6 170.4 186.1C170.4 189.6 170.1 193.1 169.4 196.5C187.1 170.4 181.5 135.2 156.7 115.9Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_11"
                              d="M187.8 227.1C205.197 227.1 219.3 212.997 219.3 195.6C219.3 178.203 205.197 164.1 187.8 164.1C170.403 164.1 156.3 178.203 156.3 195.6C156.3 212.997 170.403 227.1 187.8 227.1Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_12"
                              d="M197.8 232.4C215.087 232.4 229.1 218.387 229.1 201.1C229.1 183.814 215.087 169.8 197.8 169.8C180.514 169.8 166.5 183.814 166.5 201.1C166.5 218.387 180.514 232.4 197.8 232.4Z"
                              fill="#FAEBDC"
                            />
                            <path
                              id="Vector_13"
                              d="M178.7 162.5C190.077 162.5 199.3 153.277 199.3 141.9C199.3 130.523 190.077 121.3 178.7 121.3C167.323 121.3 158.1 130.523 158.1 141.9C158.1 153.277 167.323 162.5 178.7 162.5Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_14"
                              d="M185.2 165.9C196.522 165.9 205.7 156.722 205.7 145.4C205.7 134.078 196.522 124.9 185.2 124.9C173.878 124.9 164.7 134.078 164.7 145.4C164.7 156.722 173.878 165.9 185.2 165.9Z"
                              fill="#FAEBDC"
                            />
                            <path
                              id="Vector_15"
                              d="M109.6 236.6C123.849 236.6 135.4 225.049 135.4 210.8C135.4 196.551 123.849 185 109.6 185C95.3511 185 83.8 196.551 83.8 210.8C83.8 225.049 95.3511 236.6 109.6 236.6Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_16"
                              d="M117.8 240.9C131.994 240.9 143.5 229.394 143.5 215.2C143.5 201.006 131.994 189.5 117.8 189.5C103.606 189.5 92.1 201.006 92.1 215.2C92.1 229.394 103.606 240.9 117.8 240.9Z"
                              fill="#FAEBDC"
                            />
                            <path
                              id="Vector_17"
                              d="M212.5 191.1C223.27 191.1 232 182.37 232 171.6C232 160.83 223.27 152.1 212.5 152.1C201.73 152.1 193 160.83 193 171.6C193 182.37 201.73 191.1 212.5 191.1Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_18"
                              d="M220.9 196.6C231.614 196.6 240.3 187.914 240.3 177.2C240.3 166.486 231.614 157.8 220.9 157.8C210.186 157.8 201.5 166.486 201.5 177.2C201.5 187.914 210.186 196.6 220.9 196.6Z"
                              fill="#FAEBDC"
                            />
                          </g>
                          <g id="Group_7">
                            <path
                              id="Vector_19"
                              d="M232.7 237.5C243.138 237.5 251.6 229.038 251.6 218.6C251.6 208.162 243.138 199.7 232.7 199.7C222.262 199.7 213.8 208.162 213.8 218.6C213.8 229.038 222.262 237.5 232.7 237.5Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_20"
                              d="M238.7 240.5C249.028 240.5 257.4 232.128 257.4 221.8C257.4 211.472 249.028 203.1 238.7 203.1C228.372 203.1 220 211.472 220 221.8C220 232.128 228.372 240.5 238.7 240.5Z"
                              fill="#FAEBDC"
                            />
                            <path
                              id="Vector_21"
                              d="M248 218C255.622 218 261.8 211.822 261.8 204.2C261.8 196.578 255.622 190.4 248 190.4C240.378 190.4 234.2 196.578 234.2 204.2C234.2 211.822 240.378 218 248 218Z"
                              fill="#E2BBAA"
                            />
                            <path
                              id="Vector_22"
                              d="M254 221.8C261.566 221.8 267.7 215.666 267.7 208.1C267.7 200.534 261.566 194.4 254 194.4C246.434 194.4 240.3 200.534 240.3 208.1C240.3 215.666 246.434 221.8 254 221.8Z"
                              fill="#FAEBDC"
                            />
                          </g>
                        </g>
                        <g id="Group_8">
                          <path
                            id="Vector_23"
                            d="M346.2 93.3C352.662 93.3 357.9 88.0617 357.9 81.6C357.9 75.1383 352.662 69.9 346.2 69.9C339.738 69.9 334.5 75.1383 334.5 81.6C334.5 88.0617 339.738 93.3 346.2 93.3Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_24"
                            d="M296.8 92.8C294.9 94.3 293.2 96 291.7 97.9C293.2 95.9 294.9 94.2 296.8 92.8Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_25"
                            d="M337.8 98.8C344.427 98.8 349.8 93.4274 349.8 86.8C349.8 80.1726 344.427 74.8 337.8 74.8C331.173 74.8 325.8 80.1726 325.8 86.8C325.8 93.4274 331.173 98.8 337.8 98.8Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_26"
                            d="M341.6 100.8C348.172 100.8 353.5 95.4722 353.5 88.9C353.5 82.3278 348.172 77 341.6 77C335.028 77 329.7 82.3278 329.7 88.9C329.7 95.4722 335.028 100.8 341.6 100.8Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_27"
                            d="M376.8 101.9C372.3 89 360.1 80.4 346.4 80.4C346.4 68.5 336.8 58.9 324.9 58.9C313 58.9 303.4 68.5 303.4 80.4C303.4 80.4 303.4 80.4 303.4 80.5C302.5 80.5 301.6 80.4 300.7 80.4C283 80.4 268.6 94.9 268.7 112.7C268.8 130.5 283.2 144.8 301 144.8C309.5 144.8 317.7 141.4 323.7 135.3C334.1 145.7 350.2 147.8 362.9 140.3C372.2 147.6 385.7 146 393 136.6C400.3 127.3 398.7 113.8 389.3 106.5C385.8 103.7 381.4 102.1 376.8 101.9Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_28"
                            d="M324.9 71.6C328.6 67.4 333.7 64.8 339.2 64.3C330.9 56.9 318.2 57.1 310.1 64.9L310 65C309.8 65.2 309.5 65.4 309.3 65.7C309.1 65.9 308.8 66.2 308.6 66.5L308 67.3C307.4 68.1 306.8 68.9 306.3 69.8C305.9 70.5 305.6 71.2 305.2 71.9C305 72.2 304.9 72.5 304.8 72.9C304.6 73.6 304.3 74.3 304.1 75C304 75.2 304 75.5 303.9 75.7C303.8 76.1 303.7 76.6 303.6 77.1C303.6 77.3 303.5 77.5 303.5 77.7C303.5 77.9 303.5 78.1 303.5 78.3C303.4 79 303.4 79.8 303.4 80.5V80.6C302.5 80.6 301.6 80.5 300.7 80.5C282.9 80 268.1 94 267.6 111.8C267.1 129.6 281.1 144.4 298.9 144.9C284.1 135 280.1 115.1 290 100.3C290.5 99.5 291.1 98.8 291.6 98.1C293 96.1 294.7 94.4 296.7 93C306.9 85.6 321.2 88 328.5 98.2C329.9 100.1 331 102.3 331.7 104.6C332.4 107.1 332.7 109.6 332.8 112.1C332.8 112.4 332.8 112.6 332.8 112.9C332.8 114.9 332.6 117 332.2 119C342.7 103.4 339.4 82.9 324.9 71.6Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_29"
                            d="M343.1 136.6C353.262 136.6 361.5 128.362 361.5 118.2C361.5 108.038 353.262 99.8 343.1 99.8C332.938 99.8 324.7 108.038 324.7 118.2C324.7 128.362 332.938 136.6 343.1 136.6Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_30"
                            d="M348.9 139.6C358.952 139.6 367.1 131.452 367.1 121.4C367.1 111.348 358.952 103.2 348.9 103.2C338.848 103.2 330.7 111.348 330.7 121.4C330.7 131.452 338.848 139.6 348.9 139.6Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_31"
                            d="M297.5 142.1C305.84 142.1 312.6 135.34 312.6 127C312.6 118.661 305.84 111.9 297.5 111.9C289.161 111.9 282.4 118.661 282.4 127C282.4 135.34 289.161 142.1 297.5 142.1Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_32"
                            d="M302.3 144.6C310.584 144.6 317.3 137.884 317.3 129.6C317.3 121.316 310.584 114.6 302.3 114.6C294.016 114.6 287.3 121.316 287.3 129.6C287.3 137.884 294.016 144.6 302.3 144.6Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_33"
                            d="M369.3 142.5C375.375 142.5 380.3 137.575 380.3 131.5C380.3 125.425 375.375 120.5 369.3 120.5C363.225 120.5 358.3 125.425 358.3 131.5C358.3 137.575 363.225 142.5 369.3 142.5Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_34"
                            d="M372.8 144.4C378.82 144.4 383.7 139.52 383.7 133.5C383.7 127.48 378.82 122.6 372.8 122.6C366.78 122.6 361.9 127.48 361.9 133.5C361.9 139.52 366.78 144.4 372.8 144.4Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_35"
                            d="M378.2 131.2C382.618 131.2 386.2 127.618 386.2 123.2C386.2 118.782 382.618 115.2 378.2 115.2C373.782 115.2 370.2 118.782 370.2 123.2C370.2 127.618 373.782 131.2 378.2 131.2Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_36"
                            d="M381.7 133.5C386.118 133.5 389.7 129.918 389.7 125.5C389.7 121.082 386.118 117.5 381.7 117.5C377.282 117.5 373.7 121.082 373.7 125.5C373.7 129.918 377.282 133.5 381.7 133.5Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_37"
                            d="M357.5 115.6C363.796 115.6 368.9 110.496 368.9 104.2C368.9 97.904 363.796 92.8 357.5 92.8C351.204 92.8 346.1 97.904 346.1 104.2C346.1 110.496 351.204 115.6 357.5 115.6Z"
                            fill="#E2BBAA"
                          />
                          <path
                            id="Vector_38"
                            d="M362.4 118.7C368.641 118.7 373.7 113.641 373.7 107.4C373.7 101.159 368.641 96.1 362.4 96.1C356.159 96.1 351.1 101.159 351.1 107.4C351.1 113.641 356.159 118.7 362.4 118.7Z"
                            fill="#FAEBDC"
                          />
                        </g>
                      </g>
                      <g id="bird">
                        <g id="Group_9">
                          <path
                            id="Vector_39"
                            d="M459.8 416.4C461.8 393.3 476 374.7 494.7 369.8C508.9 366.1 521.2 371.4 525.8 373.7"
                            stroke="#472300"
                            stroke-width="2.74"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Vector_40"
                            d="M479.3 443.6C479.3 460.8 459.9 474.7 459.9 474.7C459.9 474.7 440.5 460.8 440.5 443.6C440.5 426.4 459.9 412.5 459.9 412.5C459.9 412.5 479.3 426.4 479.3 443.6Z"
                            fill="#006464"
                          />
                          <path
                            id="Vector_41"
                            d="M440.4 443.6C440.4 460.8 459.8 474.7 459.8 474.7V412.6C459.8 412.5 440.4 426.4 440.4 443.6Z"
                            fill="#0F373C"
                          />
                        </g>
                        <g id="Group_10">
                          <path
                            id="Vector_42"
                            d="M350.9 410.7C351 393.6 364.8 379.7 382 379.6H444.1C461.2 379.7 475.1 393.5 475.2 410.7"
                            fill="#F5A03C"
                          />
                          <path
                            id="Vector_43"
                            d="M288.3 597.1C236.9 596.9 195.3 555.3 195.1 503.9V255.3C195.3 203.9 236.9 162.3 288.3 162.1H319.4V597H288.3V597.1Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_44"
                            d="M319.3 566C267.9 565.8 226.3 524.2 226.1 472.8V286.4C226.3 235 267.9 193.4 319.3 193.2"
                            fill="#757B68"
                          />
                          <path
                            id="Vector_45"
                            d="M195.1 426.2C220.8 426.2 241.7 447.1 241.7 472.8H257.2V410.7H195.1V426.2Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_46"
                            d="M319.3 550.5C276.5 550.4 241.7 515.7 241.6 472.8V286.4C241.7 243.6 276.4 208.9 319.3 208.7"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_47"
                            d="M412.5 348.5H381.4C347.1 348.5 319.3 320.7 319.3 286.4V224.3C285 224.4 257.3 252.2 257.2 286.4V294.2C257.2 324.2 232.9 348.6 202.8 348.6H195L70.8 286.4C70.8 286.4 39.7 321.3 39.7 379.6C39.7 437.9 70.8 472.8 70.8 472.8L195.1 410.7H202.9C232.9 410.7 257.3 435 257.3 465.1V472.9C257.4 507.2 285.2 534.9 319.4 535V472.9C319.4 438.6 347.2 410.8 381.5 410.8H412.6C413.9 410.8 415.2 410.7 416.5 410.5V410.8H443.7V379.7C443.5 362.5 429.7 348.6 412.5 348.5Z"
                            fill="#757B68"
                          />
                          <path
                            id="Vector_48"
                            d="M101.4 379.6C101.3 355.4 106.9 331.5 117.6 309.7L70.8 286.3C70.8 286.3 39.7 321.2 39.7 379.5C39.7 437.8 70.8 472.7 70.8 472.7L117.6 449.3C106.9 427.6 101.3 403.8 101.4 379.6Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_49"
                            d="M114 441.7C115.2 444.4 116.4 447 117.5 449.4L101.8 457.3L70.7 472.8C66.7 468 63.1 462.8 60 457.3C57.1 452.3 54.5 447.1 52.2 441.8C47.9 431.8 44.7 421.4 42.6 410.7C41.6 405.8 40.8 400.6 40.3 395.2C39.8 390.2 39.6 385.1 39.6 379.7C39.6 374.3 39.9 369.1 40.4 364.2C40.9 358.7 41.7 353.6 42.7 348.7C43.7 343.5 45.1 338.3 46.6 333.2C49.9 322.4 54.4 311.9 60.1 302.1C63.2 296.6 66.7 291.4 70.8 286.6L101.9 301.9L117.6 309.8C116.4 312.2 115.2 314.7 114.1 317.5C111.9 322.6 110 327.8 108.4 333C106.8 338.1 105.5 343.3 104.5 348.5C103.5 353.6 102.7 358.8 102.2 364C101.7 369 101.4 374.2 101.4 379.5C101.4 384.8 101.7 390 102.2 395C102.7 400.5 103.5 405.6 104.5 410.5C105.5 415.7 106.9 420.9 108.4 426C109.9 431.5 111.8 436.7 114 441.7Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_50"
                            d="M319.8 472.8V410.7H381.9C347.6 410.7 319.8 438.5 319.8 472.8Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_51"
                            d="M381.9 410.7H319.8V352.4L381.9 410.7Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_52"
                            d="M101.8 301.9H60.1C63.2 296.4 66.7 291.2 70.8 286.4L101.8 301.9Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_53"
                            d="M59.1 379.6C58.9 410.2 67.9 440.2 84.9 465.8L70.8 472.8C70.8 472.8 39.7 437.9 39.7 379.6C39.7 321.3 70.8 286.4 70.8 286.4L84.9 293.4C67.9 319 58.9 349 59.1 379.6Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_54"
                            d="M319.8 294.3V379.6H39.7C39.7 378.7 39.7 377.8 39.7 376.9C39.7 376.5 39.7 376 39.7 375.6C39.7 375.4 39.7 375.2 39.7 375C39.7 374.9 39.7 374.8 39.7 374.7C39.7 374.5 39.7 374.4 39.7 374.2V373.4C39.7 372.2 39.8 371 39.9 369.8C39.9 369.3 39.9 368.9 40 368.4C40.1 367.2 40.2 366.1 40.3 364.9C40.4 364 40.5 363.1 40.6 362.2V361.9C40.6 361.5 40.7 361.1 40.7 360.7C40.7 360.3 40.8 359.9 40.8 359.5C40.9 358.8 41 358.1 41.1 357.6C41.1 357.6 41.1 357.6 41.1 357.5C41.2 356.7 41.3 355.8 41.5 355C41.5 355 41.5 355 41.5 354.9C41.5 354.5 41.6 354.1 41.7 353.7C41.7 353.7 41.7 353.6 41.7 353.5C41.7 353.4 41.7 353.4 41.7 353.3L41.8 352.6C41.8 352.4 41.9 352.1 41.9 351.9C42 351.7 41.9 351.7 41.9 351.7L42 351.2C42 351 42 350.9 42.1 350.7C42.2 350.5 42.2 350.1 42.3 349.8L42.4 349.1V348.9C42.4 348.8 42.4 348.7 42.4 348.5L42.5 347.9C42.5 347.8 42.5 347.6 42.6 347.5L42.7 347.1C42.8 346.4 43 345.7 43.1 345.1C43.1 345 43.1 344.8 43.2 344.7L43.4 344L43.7 342.7V342.5L44 341.2L44.3 339.8C44.3 339.7 44.3 339.5 44.4 339.4C44.5 339.3 44.5 339 44.5 338.9L45.1 336.7V336.6C45.3 336 45.4 335.4 45.6 334.8C45.7 334.5 45.8 334.2 45.9 333.9C46 333.6 46.1 333.3 46.2 333L46.7 331.3L46.8 330.9C46.9 330.4 47.1 330 47.2 329.5C47.2 329.5 47.2 329.4 47.2 329.3C47.2 329.2 47.3 329.1 47.3 328.9C47.3 328.8 47.4 328.7 47.4 328.6L47.5 328.2C47.6 327.9 47.7 327.7 47.8 327.4L48.2 326.2C48.4 325.6 48.6 325 48.8 324.5V324.4L49.1 323.6L49.5 322.5L49.8 321.8C50.1 321 50.4 320.3 50.7 319.5L51.6 317.3C51.8 316.8 52.1 316.2 52.3 315.7L52.8 314.7C52.8 314.5 52.9 314.4 53 314.2C53.1 314 53.2 313.8 53.3 313.5L54.4 311.2L54.6 310.8C54.8 310.4 54.9 310.1 55.1 309.7C55.2 309.6 55.2 309.5 55.3 309.4L55.4 309.2L55.8 308.4C55.9 308.3 55.9 308.1 56 308L56.9 307.4C57 307.1 57.2 306.9 57.3 306.6V306.5L57.4 306.3L57.8 305.6L57.9 305.4C57.9 305.3 58 305.2 58.1 305.1C58.3 304.7 58.6 304.3 58.8 303.8L59.5 302.5C59.5 302.4 59.6 302.3 59.7 302.2C59.8 302.1 59.9 301.8 60.1 301.5C60.2 301.3 60.2 301.3 60.2 301.3V301.2C60.2 301.1 60.3 301 60.4 301C60.5 300.8 60.6 300.6 60.7 300.5L60.9 300.2L61 300L61.6 299C61.7 298.8 61.9 298.5 62 298.3C62.1 298.2 62.2 298.1 62.2 297.9L63 296.5L63.5 295.8V295.7L63.7 295.9L64.1 295.3L64.2 295.1L64.7 294.4L64.9 294.2C65 294 65.1 293.9 65.2 293.7L65.4 293.5L65.6 293.3L65.9 292.8L66.3 292.2L66.4 292L66.7 291.6V291.5L67.1 291C67.1 291 67.2 290.9 67.2 290.8L67.4 290.5L67.7 290.1V290V289.9L68 289.5L68.4 289C68.5 288.9 68.6 288.7 68.7 288.6L68.8 288.4L69 288.2L69.2 287.9L69.3 287.7L69.5 287.5L69.6 287.4L69.7 287.2V287.1L69.8 287V286.9L83.9 293.9L99.2 301.6L100.8 302.4L116.5 310.3L194 349H201.8C209.9 349 217.8 347.2 225.1 343.8V286.2C225.3 234.8 266.9 193.2 318.3 193V286.9C318.3 287.4 318.3 287.8 318.3 288.3C318.3 288.7 318.3 289.2 318.3 289.7C318.3 290.2 318.3 290.8 318.4 291.3C318.5 291.8 318.5 292.4 318.5 292.9C318.6 293.3 319.7 293.8 319.8 294.3Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_55"
                            d="M393.1 368H412.5C418.9 368 424.1 373.2 424.1 379.6C424.1 386 418.9 391.2 412.5 391.2H393.1C386.7 391.2 381.5 386 381.5 379.6C381.5 373.2 386.7 368 393.1 368Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_56"
                            d="M412.5 391.2C418.907 391.2 424.1 386.007 424.1 379.6C424.1 373.194 418.907 368 412.5 368C406.093 368 400.9 373.194 400.9 379.6C400.9 386.007 406.093 391.2 412.5 391.2Z"
                            fill="#FAEBDC"
                          />
                        </g>
                      </g>
                      <g id="small-bird">
                        <g id="Group_11">
                          <path
                            id="Vector_57"
                            d="M563.7 206.3C563.7 197.3 571 190.1 579.9 190.1H612.4C621.4 190.1 628.7 197.4 628.7 206.3"
                            fill="#F4A03E"
                          />
                          <path
                            id="Vector_58"
                            d="M530.9 303.8C504 303.7 482.3 281.9 482.2 255.1V125.1C482.3 98.2 504.1 76.4 530.9 76.4H547.1V303.9H530.9V303.8Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_59"
                            d="M547.2 287.5C520.3 287.4 498.5 265.6 498.5 238.8V141.3C498.6 114.4 520.4 92.6 547.2 92.6"
                            fill="#757B68"
                          />
                          <path
                            id="Vector_60"
                            d="M482.2 214.4C495.7 214.4 506.6 225.3 506.6 238.8H514.7V206.3H482.2V214.4V214.4Z"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_61"
                            d="M547.2 279.4C524.8 279.3 506.6 261.2 506.6 238.8V141.3C506.7 118.9 524.8 100.7 547.2 100.7"
                            fill="#1C2600"
                          />
                          <path
                            id="Vector_62"
                            d="M595.9 173.8H579.7C561.8 173.8 547.2 159.3 547.2 141.3V108.8C529.2 108.8 514.7 123.4 514.7 141.3V145.4C514.7 161.1 502 173.8 486.3 173.8H482.2L417.2 141.3C417.2 141.3 401 159.6 401 190C401 220.4 417.2 238.8 417.2 238.8L482.3 206.3H486.4C502.1 206.3 514.8 219 514.8 234.7V238.8C514.9 256.7 529.4 271.2 547.3 271.3V238.7C547.3 220.8 561.8 206.3 579.7 206.2H596C596.7 206.2 597.4 206.2 598 206.1V206.2H612.2V189.9C612.2 181.1 604.9 173.8 595.9 173.8Z"
                            fill="#757B68"
                          />
                          <path
                            id="Vector_63"
                            d="M433.2 190C433.2 177.3 436.1 164.8 441.7 153.5L417.2 141.3C417.2 141.3 401 159.6 401 190C401 220.4 417.2 238.8 417.2 238.8L441.7 226.6C436 215.2 433.1 202.7 433.2 190Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_64"
                            d="M439.7 222.5C440.3 223.9 440.9 225.2 441.5 226.5L433.3 230.6L417.1 238.7C415 236.2 413.1 233.4 411.5 230.6C410 228 408.6 225.3 407.4 222.5C406.3 219.8 405.3 217.1 404.4 214.4C403.6 211.7 402.9 209 402.3 206.3C401.8 203.7 401.4 201 401.1 198.2C400.9 195.6 400.7 192.9 400.7 190.1C400.7 187.4 400.8 184.7 401.1 182C401.4 179.3 401.7 176.6 402.3 173.9C402.8 171.2 403.5 168.4 404.4 165.8C405.2 163 406.2 160.3 407.4 157.7C408.6 154.9 410 152.2 411.5 149.6C413.1 146.7 415 144 417.1 141.5L433.3 149.6L441.5 153.7C440.9 154.9 440.3 156.3 439.7 157.7C438.6 160.4 437.6 163.1 436.7 165.8C435.9 168.5 435.2 171.2 434.6 173.9C434.1 176.5 433.7 179.2 433.4 182C433.1 184.7 433 187.4 433 190.1C433 192.9 433.1 195.6 433.4 198.2C433.7 201 434.1 203.8 434.6 206.3C435.8 211.8 437.5 217.3 439.7 222.5Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_65"
                            d="M547.4 238.8V206.3H579.9C562 206.3 547.4 220.9 547.4 238.8Z"
                            fill="#A8B28E"
                          />
                          <path
                            id="Vector_66"
                            d="M596.2 196.1C599.569 196.1 602.3 193.369 602.3 190C602.3 186.631 599.569 183.9 596.2 183.9C592.831 183.9 590.1 186.631 590.1 190C590.1 193.369 592.831 196.1 596.2 196.1Z"
                            fill="#FAEBDC"
                          />
                          <path
                            id="Vector_67"
                            d="M579.9 206.3H547.4V175.8L579.9 206.3Z"
                            fill="#1C2600"
                          />
                        </g>
                        <path
                          id="Vector_68"
                          d="M411.1 190C411 206 415.7 221.7 424.6 235.1L417.2 238.8C417.2 238.8 401 220.5 401 190.1C401 159.7 417.2 141.3 417.2 141.3L424.6 145C415.7 158.3 411 174 411.1 190Z"
                          fill="#1C2600"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center sky-text">
              <h1>Sky</h1>
              <h3>Premium package</h3>
              <p>
                Gardening service, with all the trimmings. As well as including
                all the services from the [standard] package, your garden will
                also benefit from our additional expert services as well as free
                bedding plants and rock salt. We would highly recommend this
                service to any client with a large garden or who wants their
                garden to be regularly maintained to a very high standard.
              </p>
              <GreenButton
                title="see more"
                onClick={this.hideShowContent}
                className={
                  this.state.hidden
                    ? "see-more-btn align-self-center align-self-lg-end"
                    : "d-none"
                }
              >
                see more
              </GreenButton>
            </div>

            <div
              className={
                this.state.hidden ? "d-none" : "col-12 d-flex flex-column"
              }
            >
              <div className="row sky-list">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 d-md-flex pl-2">
                  <ul className="mb-0 pb-0">
                    <li className="mb-4">monitoring gardens</li>
                    <li className="mb-4">grass cutting</li>
                    <li className="mb-4">edging of lawns</li>
                    <li className="mb-4">weeding / hoeing</li>
                    <li className="mb-4">general clearance of beds</li>
                    <li className="mb-4">fertilising plants</li>
                    <li className="mb-4">supply seasonal bedding plants</li>
                    <li className="mb-4">
                      aeration, scarification and sanding of lawns
                    </li>
                    <li className="mb-4">planting new plants</li>
                  </ul>
                  <ul className="second-list ml-md-5 ml-lg-0">
                    <li className="mb-4">pruning</li>
                    <li className="mb-4">hedge and shrub trimming</li>
                    <li className="mb-4">leaf removal</li>
                    <li className="mb-4">deadheading</li>
                    <li className="mb-4">snow removal and spreading salt</li>
                    <li className="mb-4">spraying of weeds</li>
                    <li className="mb-4">drain cover cleaning</li>
                    <li className="mb-4">winter plant protection</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-12 col-lg-6 d-flex flex-column flex-lg-row">
                  <p className="col-12 col-lg-6 date-p small-text pl-0">
                    1 visit per fortnight during the vegetation season (March ???
                    November)<br></br>1 visit per 4 weeks in winter season
                    (December ??? February)
                  </p>
                  <div className="col-12 col-lg-6 text-center">
                    <OrangeButton
                      title="book now"
                      onClick={this.hideShowForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.form ? "container-fluid" : "d-none"}>
          <PremiumPackageForm />
        </div>
      </>
    );
  }
}
