import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import Button from "./controls/Button";
import IButtonBeltProps from "./Schema/IButtonBeltProps";
import style from "./Styles/ButtonBelt.styl";
export default class ButtonBelt extends React.Component<IButtonBeltProps> {
    public render() {
        if (this.props.type === "dance") {
            return (
                <div className={style.buttonBeltContainer}>
                    <Row center="xs">
                        <Col>
                            <Button iconSrc="./dance.svg" type="next" disabled={false} />
                        </Col>
                    </Row>
                </div>
            );
        } else if (this.props.type === "nextprev") {
            return (
                <div className={style.buttonBeltContainer}>
                    <Row>
                        <Col xs={3}>
                            <Button iconSrc="./prev.svg" type="prev" disabled={this.props.prevDisabled} />
                        </Col>
                        <Col xsOffset={6} xs={3}>
                            <Button iconSrc="./next.svg" type="next" disabled={false} />
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}
