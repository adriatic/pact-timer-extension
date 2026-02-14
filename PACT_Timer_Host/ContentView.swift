import SwiftUI
import SafariServices

struct ContentView: View {

    var body: some View {
        VStack(spacing: 20) {
            Text("PACT Timer Host")
                .font(.title)

            Button("Open Safari Extension Settings") {
                SFSafariApplication.showPreferencesForExtension(
                    withIdentifier: "org.pact.PACT-Timer-Host.PACT-TIMER-Safari"
                ) { error in
                    if let error = error {
                        print("Error opening Safari preferences:", error)
                    } else {
                        print("Safari preferences opened successfully")
                    }
                }
            }
        }
        .frame(width: 400, height: 200)
    }
}

