// Lifts the subject (phone / laptop) out of a render using Vision's
// foreground-instance mask, writing a transparent PNG cropped to the subject.
// Originals are never modified.
//
//   swiftc -O scripts/cutout.swift -o /tmp/cutout
//   /tmp/cutout <input.png> <output.png>

import AppKit
import CoreImage
import Foundation
import Vision

let args = CommandLine.arguments
guard args.count >= 3 else {
    FileHandle.standardError.write("usage: cutout <input> <output>\n".data(using: .utf8)!)
    exit(64)
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])

let handler = VNImageRequestHandler(url: inputURL, options: [:])
let request = VNGenerateForegroundInstanceMaskRequest()

do {
    try handler.perform([request])

    guard let result = request.results?.first else {
        FileHandle.standardError.write("no foreground subject detected\n".data(using: .utf8)!)
        exit(1)
    }

    let masked = try result.generateMaskedImage(
        ofInstances: result.allInstances,
        from: handler,
        croppedToInstancesExtent: true
    )

    let image = CIImage(cvPixelBuffer: masked)
    let context = CIContext()
    guard let space = CGColorSpace(name: CGColorSpace.sRGB) else { exit(2) }

    try context.writePNGRepresentation(of: image, to: outputURL, format: .RGBA8, colorSpace: space)
    print("ok  \(outputURL.lastPathComponent)  \(Int(image.extent.width))x\(Int(image.extent.height))")
} catch {
    FileHandle.standardError.write("error: \(error)\n".data(using: .utf8)!)
    exit(3)
}
