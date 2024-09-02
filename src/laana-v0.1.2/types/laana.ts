// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "laana.proto" (package "Laana", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { EventWrapper } from "./event/wrapper";
import { ActionPong } from "./action/wrapper";
import { ActionPing } from "./action/wrapper";
/**
 * @generated from protobuf message Laana.LannaDataWrapper
 */
export interface LannaDataWrapper {
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "actionPing";
        /**
         * @generated from protobuf field: Laana.ActionPing actionPing = 1;
         */
        actionPing: ActionPing;
    } | {
        oneofKind: "actionPong";
        /**
         * @generated from protobuf field: Laana.ActionPong actionPong = 2;
         */
        actionPong: ActionPong;
    } | {
        oneofKind: "event";
        /**
         * @generated from protobuf field: Laana.EventWrapper event = 3;
         */
        event: EventWrapper;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class LannaDataWrapper$Type extends MessageType<LannaDataWrapper> {
    constructor() {
        super("Laana.LannaDataWrapper", [
            { no: 1, name: "actionPing", kind: "message", oneof: "data", T: () => ActionPing },
            { no: 2, name: "actionPong", kind: "message", oneof: "data", T: () => ActionPong },
            { no: 3, name: "event", kind: "message", oneof: "data", T: () => EventWrapper }
        ]);
    }
    create(value?: PartialMessage<LannaDataWrapper>): LannaDataWrapper {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.data = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<LannaDataWrapper>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LannaDataWrapper): LannaDataWrapper {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Laana.ActionPing actionPing */ 1:
                    message.data = {
                        oneofKind: "actionPing",
                        actionPing: ActionPing.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).actionPing)
                    };
                    break;
                case /* Laana.ActionPong actionPong */ 2:
                    message.data = {
                        oneofKind: "actionPong",
                        actionPong: ActionPong.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).actionPong)
                    };
                    break;
                case /* Laana.EventWrapper event */ 3:
                    message.data = {
                        oneofKind: "event",
                        event: EventWrapper.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).event)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LannaDataWrapper, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Laana.ActionPing actionPing = 1; */
        if (message.data.oneofKind === "actionPing")
            ActionPing.internalBinaryWrite(message.data.actionPing, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Laana.ActionPong actionPong = 2; */
        if (message.data.oneofKind === "actionPong")
            ActionPong.internalBinaryWrite(message.data.actionPong, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Laana.EventWrapper event = 3; */
        if (message.data.oneofKind === "event")
            EventWrapper.internalBinaryWrite(message.data.event, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Laana.LannaDataWrapper
 */
export const LannaDataWrapper = new LannaDataWrapper$Type();